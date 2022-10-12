class RemovePluralToForeignKeyCast < ActiveRecord::Migration[5.1]
  def change
    change_table :casts do |c| 
      c.remove_references :members 
      c.remove_references :movies
    end
  end
end
