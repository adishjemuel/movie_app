class AlterUserToMemberCastsForeignKey < ActiveRecord::Migration[5.1]
  def change
    change_table :casts do |c|
      c.remove_references :user 
    end

    add_reference :casts, :member
  end
end
