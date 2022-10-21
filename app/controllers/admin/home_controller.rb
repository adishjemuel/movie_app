class Admin::HomeController < Admin::BaseController 
  
  load_and_authorize_resource :class => false

  def index 
    @genres = Genre.all
  end 

end