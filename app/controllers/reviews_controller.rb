class ReviewsController < ApplicationController 
  
  # Refactor update and delete when cancancan
  before_action :authenticate_user!
  
  before_action :set_review, only: %i[edit update destroy show] 

  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  load_and_authorize_resource 
  
  def new  
    @movie = Movie.find(params[:movie_id])
    @review = Review.find_by(movie: @movie, user: current_user) 
    redirect_to @movie if @review.present?
  end 

  def create 
    @movie = Movie.find(params[:movie_id])
    redirect_to @movie if Review.find_by(movie: @movie, user: current_user).present? 
    @review = @movie.reviews.create(review_params) 
    @review.user_id = current_user.id 

    if @review.save
      flash[:successful_review] = true 
    else 
      flash[:errors] = @review.errors
      flash[:successful_review] = false 
    end
    redirect_to new_movie_review_url
  end

  def edit 
  end 

  def update 
    if @review.update(review_params)  
      flash[:successful] = true 
    else 
      flash[:errors] = @review.errors
      flash[:successful] = false  
    end 
    redirect_to edit_review_url
  end
  
  #Refactor and add success/failure message 
  def destroy 
    @movie = @review.movie
    if @review.destroy 
      flash[:successful] = true 
    else 
      flash[:successful] = false 
      flash[:errors] = @review.errors 
    end 
    redirect_to @movie 
  end 

  private 

  def review_params 
    params.require(:review).permit(:title, :body, :score)
  end 

  def set_review 
    @review = Review.includes(:movie).find params[:id] 
  end

  def record_not_found 
    redirect_to root_path 
  end
end 