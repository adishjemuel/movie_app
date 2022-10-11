class Movie < ApplicationRecord

  paginates_per 20
  has_many :reviews

  has_many :casts
  has_many :members, through: :casts, dependent: :destroy
  
  has_many :favorites 
  has_many :users, through: :favorites, dependent: :destroy

  has_many :movie_genres 
  has_many :genres, through: :movie_genres, dependent: :destroy
  
  attribute :formatted_release_date, :string

  def formatted_release_date 
    release.respond_to?(:strftime) ? release.strftime("%B %d, %Y"): ""
  end


end