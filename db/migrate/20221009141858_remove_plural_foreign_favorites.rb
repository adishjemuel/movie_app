class RemovePluralForeignFavorites < ActiveRecord::Migration[5.1]
  def change
    change_table :favorites do |f| 
      f.remove_references :users 
      f.remove_references :movies 
    end
  end
end
