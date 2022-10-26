class FavoritesController < ApplicationController 
  
  before_action :authenticate_user!
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
  authorize_resource 
  
  def index 
    @movies = current_user.movies.page(params[:page])
    @genres = Genre.all
  end

  def create  
    @movie = Movie.find_by_id(params[:movie][:id])
    @favorite = Favorite.find_by(user: current_user, movie: @movie) 
    redirect_to @movie if @favorite.present?
    
    @favorite = Favorite.new(user: current_user, movie: @movie)

    if @favorite.save
      flash[:successful_create] = true 
    else 
      flash[:succesful_create] = false 
    end 
    redirect_to @movie 
  end
  
  def destroy 
    @movie = Movie.find_by(id: params[:movie][:id])
    @favorite = Favorite.find_by(movie_id: @movie.id, user_id: current_user.id)
    if @favorite.destroy 
      flash[:successful_remove] = true 
    else 
      flash[:successful_remove] = false 
    end
    if params[:list].present? 
      redirect_to favorites_url 
    else 
      redirect_to @movie
    end
  end

  private 

  def record_not_found 
    redirect_to root_path 
  end

end