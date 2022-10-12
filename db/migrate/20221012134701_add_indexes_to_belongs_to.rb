class AddIndexesToBelongsTo < ActiveRecord::Migration[5.1]
  def change
    add_index :reviews, [:movie_id, :user_id]
  end
end
