class MoviesController < ApplicationController
  
  before_action :set_movie, only: %i[show edit update destroy]
  before_action :authenticate_user!, only: %i[update destroy create]
 
  def index
    @q = Movie.ransack(params[:q])
    @movies = @q.result.page params[:page]  
    @genres = Genre.all
  end

  def show  
  #  @reviews = @movie.reviews.map { |review| [review, review.user] }
  end
 
  # Refactor for Admin Redirects
  def create 
    @movie = Movie.new(movie_params) 
    @movie.save
  end

  def edit 
  end 
  
  # Refactor for Admin Redirects
  def update
    # if @movie.update(movie_params) 
  end 

  def destroy 
    #if @movie.destroy
  end 
  
  private

  def set_movie
    @movie = Movie.includes(reviews: :user).find params[:id]
  end

  def movie_params 
    params.require(:movie).permit(:title, :summary, :release, :trailer_url)
  end
  
end
