
class Admin::ReviewsController < Admin::BaseController
  
  before_action :set_review, only: %i[edit update destroy show] 

  def index 
    @reviews = Review.includes(:movie).all
  end 
  
  def new 
    @movies = Movie.all 
  end

  def create 
    @movie = Movie.find(params[:movie][:id])
    @review = @movie.reviews.create(review_params) 
    @review.user_id = current_user.id 

    if @review.save 
      flash[:successful] = true 
    else 
      flash[:successful] = false 
    end
    redirect_to new_admin_review_url
  end

  def edit 
    @movies = Movie.all 
  end 

  def update  
    @movie = Movie.find(params[:movie][:id])
    if @review.update(review_params)  && @review.update(movie: @movie) 
      flash[:successful] = true 
    else 
      flash[:successful] = false 
    end
    redirect_to edit_admin_review_url
  end
  
  #Refactor and add success/failure message 
  def destroy 
    if @review.destroy 
      flash[:successful] = true 
    else 
      flash[:successful] = false 
    end
    redirect_to admin_reviews_url
  end 

  private 

  def review_params 
    params.require(:review).permit(:title, :body, :score)
  end 

  def set_review 
    @review = Review.find params[:id] 
  end

end