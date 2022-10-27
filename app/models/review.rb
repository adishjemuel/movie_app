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

  # before_save :ensure_one_review_user_per_movie

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

  private 

  # def ensure_one_review_user_per_movie 
  #   @review = Review.find_by(user_id: user_id, movie_id: movie_id)
  #   p '------'
  #   p @review.present? 
  #   p '------' 
  # end



end
