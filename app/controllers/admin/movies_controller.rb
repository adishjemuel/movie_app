class Admin::MoviesController <  Admin::BaseController

  load_and_authorize_resource
  before_action :set_movie, except: %i[index]

  def index 
    @movies = Movie.all
  end 

  def new 
  end 

  def create 
    @movie = Movie.new(movie_params)
    redirect_to admin_movies_url if @movie.save 
  end
  
  def edit 
    @genres = Genre.all
  end

  def update 
    redirect_to admin_movies_url if @movie.update(movie_params) 
  end

  def destroy 
    params_ids = params[:movies][:ids] 
    params_ids_array = params_ids.split(',') 
    redirect_to admin_movies_url if params_ids_array.length == 1 && @movie.destroy
    @movies = Movie.where(id: params_ids_array) 
    if @movies.present? && movies.count > 1
      @movies.destroy_all 
      redirect_to admin_movies_url
    end

  end
  
  private 

  def movie_params 
    params.require(:movie).permit(:title, :summary, :release, :trailer_url, :cover) 
  end

  def set_movie 
    @movie = Movie.find(params[:id])
  end
 
end