class Admin::HomeController < Admin::BaseController 

  load_and_authorize_resource class: 'Movie'

  def index 
    @genres = Genre.all
    @members_count = Member.count
    @reviews_count = Review.count
  end 

end