class Genre < ApplicationRecord 
  has_many :movie_genres 

  self.inheritance_column = :_type_disabled

  has_many :movies, through: :movie_genres, dependent: :destroy

  attribute :movies_count

  def movies_count
    movies.count
  end
end