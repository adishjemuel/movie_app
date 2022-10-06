class MoviesController < ApplicationController
  
# before_action :set_movie, only: %i[show edit update destroy create]

  def index
    @q = Movie.ransack(params[:q])
    @movies = @q.result.page params[:page]
  end

  def show  
    
  end

  def create 
  end

  def edit 
  end 

  def update 
  end 

  def destroy 
  end 
  
  private

  # def set_article 
  #   @movie = Movie.find(params[:id])
  # end
  
end
