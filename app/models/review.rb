class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user 

  validates :title, presence: true 
  validates :body,  presence: true 
  validates :score, presence: true
  attribute :review_user 
  attribute :review_avatar

  attribute :created  

  attribute :movie_title 

  def movie_title 
    movie.title 
  end

  def created 
    created_at.respond_to?(:strftime) ? created_at.strftime("%B %d, %Y"): ""
  end

  def review_user
    user  
  end 

  def review_avatar
    user.avatar.url 
  end

end
