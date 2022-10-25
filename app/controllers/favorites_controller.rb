class FavoritesController < ApplicationController 
  
  before_action :authenticate_user!
  before_action :set_movie, except: %i[index]
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
  load_and_authorize_resource 
  
  def index 
    @movies = current_user.movies.page(params[:page])
    @genres = Genre.all
  end

  def create 
    @favorite = Favorite.new(user: current_user, movie: @movie)
    if @favorite.save
      redirect_to @movie
    end
  end
  
  def destroy 
    @favorite = Favorite.find_by movie_id: @movie.id, user_id: current_user.id

    if @favorite.destroy 
      redirect_to @movie 
    else 
      redirect_to root_path 
    end
  end

  private 

  def set_movie 
    @movie = Movie.find(params[:id])
  end

  def record_not_found 
    redirect_to root_path 
  end

end