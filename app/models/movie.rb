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
  attribute :average_rating, :integer

  def formatted_release_date 
    release.respond_to?(:strftime) ? release.strftime("%B %d, %Y"): ""
  end

  def average_rating 
    scores = reviews.pluck(:score)
    
    total_rating = 0 
    scores.group_by(&:itself).transform_values!(&:size).each do |keys, value| 
      total_rating+=(keys*value) 
    end 
    scores.length == 0 ? 0  : total_rating/scores.length
  end
end