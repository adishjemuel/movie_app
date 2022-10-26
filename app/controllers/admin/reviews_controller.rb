
class Admin::ReviewsController < Admin::BaseController
   
  load_and_authorize_resource
  before_action :set_review, only: %i[edit update destroy show] 

  def index 
    @reviews = Review.includes(:movie).all
  end 
  
  def new 
    @movies = Movie.all 
  end

  def create 
    @movie = Movie.find(params[:movie][:id]) if params[:movie].present? && params[:movie][:id].present?
    @review = @movie.reviews.create(review_params) if @movie.present?
    @review.user_id = current_user.id if @review.present?

    if @review.save 
      flash[:successful] = true 
    else 
      flash[:errors] = @review.errors
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
      flash[:errors] = @review.errors
      flash[:successful] = false 
    end
    redirect_to edit_admin_review_url
  end
  
  def destroy 
    params_ids = params[:reviews][:ids] 
    params_ids_array = params_ids.split(',') 
    @reviews = Review.where(id: params_ids_array) 
    if @review.present? 
      @reviews.destroy_all 
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