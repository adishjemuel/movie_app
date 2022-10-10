class AddProperBelongsToFavorites < ActiveRecord::Migration[5.1]
  def change
    add_reference :favorites, :movie 
    add_reference :favorites, :user
  end
end
