class ReviewsController < ApplicationController 
  
  # Refactor update and delete when cancancan
  before_action :authenticate_user!
  
  before_action :set_review, only: %i[edit update destroy show] 
  def new  
    @movie = Movie.find(params[:movie_id])
  end 

  def create 
    @movie = Movie.find(params[:movie_id])
    @review = @movie.reviews.create(review_params) 
    @review.user_id = current_user.id 

    if @review.save 
      redirect_to @movie  
    else 
      redirect_to root_path 
    end
  end

  def edit 
  end 

  def update 
    if @review.update(review_params) 
      redirect_to @review 
    else 
      redirect_to root_path 
    end 
  end

  def destroy 
    # if @review.destroy 
    # end
  end 

  private 

  def review_params 
    params.require(:review).permit(:title, :body, :score)
  end 

  def set_review 
    @review = Review.find params[:id] 
  end
end 