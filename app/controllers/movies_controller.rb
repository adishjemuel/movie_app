class MoviesController < ApplicationController
  
  before_action :set_movie, only: %i[show edit update destroy]
  before_action :authenticate_user!, only: %i[update destroy create]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found

  def index
    @q = Movie.ransack(params[:q])
    @movies = @q.result.page params[:page]  
    @total_pages = @movies.total_pages
    @genres = Genre.all
  end

  def show   
    if current_user.movies.exists?(id: @movie.id)
      @on_list = true 
    else
      @on_list = false 
    end
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

  def record_not_found 
    redirect_to root_path 
  end
  
end
