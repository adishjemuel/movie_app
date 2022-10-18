class AddOverViewColumnToMembers < ActiveRecord::Migration[5.1]
  def change
    add_column :members, :overview, :text
  end
end
