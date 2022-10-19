class MoviesController < ApplicationController
  
  before_action :set_movie, only: %i[show edit update destroy]
  before_action :authenticate_user!, only: %i[update destroy create]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
  
  load_and_authorize_resource 

  def index 
    sort_by_genre
    @q = @movies_genre.ransack(params[:q])
    @movies = @q.result.page params[:page]  
    @genres = Genre.all
  end

  def show   
    if current_user && current_user.movies.exists?(id: @movie.id)
      @on_list = true 
    else
      @on_list = false 
    end
  end
 
  private

  def sort_by_genre
    if params[:genre].present? && params[:genre][:type].present?
      @movies_genre = Movie.joins(:genres).where(genres: { type: params[:genre][:type]})
    else 
      @movies_genre = Movie.where(nil)
    end
  end
  
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
