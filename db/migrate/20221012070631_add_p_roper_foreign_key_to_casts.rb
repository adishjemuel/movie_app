class AddPRoperForeignKeyToCasts < ActiveRecord::Migration[5.1]
  def change
   add_reference :casts, :movie 
   add_reference :casts, :user
  end
end
