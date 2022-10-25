class ReviewsController < ApplicationController 
  
  # Refactor update and delete when cancancan
  before_action :authenticate_user!
  
  before_action :set_review, only: %i[edit update destroy show] 

  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  load_and_authorize_resource 
  
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
      redirect_to @review.movie
    else 
      redirect_to root_path 
    end 
  end
  
  #Refactor and add success/failure message 
  def destroy 
    @movie = @review.movie
    redirect_to @movie if @review.destroy
  end 

  private 

  def review_params 
    params.require(:review).permit(:title, :body, :score)
  end 

  def set_review 
    @review = Review.find params[:id] 
  end

  def record_not_found 
    redirect_to root_path 
  end
end 