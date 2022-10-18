class AddRoleColumnToCasts < ActiveRecord::Migration[5.1]
  def change
    add_column :casts, :role, :integer
  end
end
