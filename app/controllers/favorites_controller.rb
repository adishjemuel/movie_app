class FavoritesController < ApplicationController 
  
  before_action :authenticate_user!
  
  def index 
    @favorites = Favorite.where(user: current_user) 
  end

  def create 
    @favorite = Favorite.new(user: current_user, movie: Movie.find(params[:id]) 

    if @favorite.save 
      render :index
    else 
      render :new
    end
  end
  
  def destroy 
    @favorite = Favorite.find(params[:id]) 

    if @favorite.destroy 
      render :index 
    else 
      render :new 
    end
  end
end