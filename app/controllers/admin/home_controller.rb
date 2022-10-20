class Admin::HomeController < Admin::BaseController 
  
  def index 
    @genres = Genre.all
  end 

end