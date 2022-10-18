class RemoveRoleColumnToMembers < ActiveRecord::Migration[5.1]
  def change
    remove_column :members, :role
  end
end
