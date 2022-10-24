
class Admin::ReviewsController < Admin::BaseController
  
  def index 
    @genres = Review.all
  end 

end