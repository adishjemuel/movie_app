class Admin::HomeController < Admin::BaseController 
  
  load_and_authorize_resource :class => false

  def index 
    @genres = Genre.all
    @users_count = User.where(role: User.roles[:user]).count 
    @reviews_count = Review.all.count
  end 

end