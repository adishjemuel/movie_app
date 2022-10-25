class Admin::MoviesController <  Admin::BaseController

  load_and_authorize_resource
  before_action :set_movie, except: %i[index new create]

  def index 
    @movies = Movie.all
  end 

  def new 
    @genres = Genre.all
  end 

  def create 
    @movie = Movie.new(movie_params)
    if @movie.save 
      set_movie_genres 
      flash[:successful] = true 
      redirect_to new_admin_movie_url
    else 
      flash[:successful] = false 
    end
  end
  
  def edit 
    @genres = Genre.all
  end

  def update  
    if @movie.update(movie_params)
      @movie.genres.destroy_all
      set_movie_genres
      flash[:successful] = true
      redirect_to edit_admin_movie_url  
    else 
      flash[:successful] = false 
    end
  end

  def destroy 
    params_ids = params[:movies][:ids] 
    params_ids_array = params_ids.split(',') 
    @movies = Movie.where(id: params_ids_array) 
    if @movies.present?
      @movies.destroy_all 
      flash[:successful] = true 
    else 
      flash[:successful] = false 
    end
    redirect_to admin_movies_url
  end
  
  private 

  def movie_params 
    params.require(:movie).permit(:title, :summary, :release, :cover) 
  end

  def set_movie_genres
    genres_string = params[:genre][:types] 
    genres_array = genres_string.split(',')
    genres = Genre.where(type: genres_array)
    genres.each do |g| 
      MovieGenre.find_or_create_by(movie: @movie, genre: g)
    end
  end

  def set_movie 
    @movie = Movie.find(params[:id])
  end
 
end