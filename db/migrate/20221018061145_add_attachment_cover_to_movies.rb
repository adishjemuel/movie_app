class AddAttachmentCoverToMovies < ActiveRecord::Migration[5.1]
  def self.up
    change_table :movies do |t|
      t.attachment :cover
    end
  end

  def self.down
    remove_attachment :movies, :cover
  end
end
