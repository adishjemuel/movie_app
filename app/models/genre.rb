class Genre < ApplicationRecord 
  has_many :movie_genres 
  validates :type, presence: true
  self.inheritance_column = :_type_disabled

  has_many :movies, through: :movie_genres, dependent: :destroy

  attribute :movies_count

  attribute :movies_titles

  def movies_count
    movies.count
  end

  def movies_titles 
    movies.pluck(:title)
  end
end