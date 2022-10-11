class Genre < ApplicationRecord 
  has_many :movie_genres 

  self.inheritance_column = :_type_disabled

  has_many :movies, through: :movie_genres, dependent: :destroy
end