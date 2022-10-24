class Admin::GenresController < Admin::BaseController
  
  def index 
    @genres = Genre.all 
  end 

end