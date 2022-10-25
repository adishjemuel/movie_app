class Admin::GenresController < Admin::BaseController
  
  load_and_authorize_resource
  before_action :set_genre, only: %i[edit, destroy, update] 

  def index 
    @genres = Genre.all 
  end 
  
  def new 
    @movies = Movie.all 
  end
  
  def create 
    @genre = Genre.new(genre_params)
    if @genre.save 
      set_genre_movies 
      flash[:successful] = true
      redirect_to new_admin_genre_url
    else 
      flash[:successful] = false
    end
  end

  def edit 
    @movies = Movie.all 
  end 

  def update 
    if @genre.update(genre_params)
      @genre.movies.destroy_all
      set_genre_movies
      flash[:successful] = true
      redirect_to edit_admin_genre_url  
    else 
      flash[:successful] = false 
    end
  end 

  def destroy 
    if @genre.destroy 
      flash[:successful] = true
      redirect_to admin_genres_url 
    else
      flash[:successful] = false
    end
  end

  private 

  def genre_params 
    params.require(:genre).permit(:type) 
  end

  def set_genre_movies
    movies_string = params[:movie][:titles] 
    movies_array = movies_string.split(',')
    movies = Movie.where(title: movies_array) 
    movies.each do |m|
      MovieGenre.find_or_create_by(movie: m, genre: @genre) 
    end 
  end

  def set_genre 
    @genre = Genre.includes(:movies).find(params[:id])
  end


end