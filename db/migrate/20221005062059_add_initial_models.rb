class AddInitialModels < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |m|
      m.string :title 
      m.string :summary
      m.datetime :release 
      m.string :trailer_url
      m.timestamps
    end 

    create_table :favorites do |f|
      f.belongs_to :movies 
      f.belongs_to :users 
    end

    create_table :members do |m| 
      m.string :first_name
      m.string :last_name 
      m.datetime :birthday
      m.integer :gender 
      m.integer :role, default: 0
      m.timestamps
    end  

    create_table :casts do |c| 
      c.belongs_to :members 
      c.belongs_to :movies 
    end

    create_table :reviews do |r| 
      r.string :title 
      r.string :body
      r.integer :score
      r.timestamps
      r.belongs_to :movie, foreign_key: true
      r.belongs_to :user, foreign_key: true
    end

    add_column :users, :role, :integer, default: 0
  end
end
