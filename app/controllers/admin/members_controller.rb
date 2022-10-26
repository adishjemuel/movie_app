
class Admin::MembersController <  Admin::BaseController

  load_and_authorize_resource
  before_action :set_member, except: %i[index new create]

  def index 
    @members = Member.all
  end 

  def new 
    @movies = Movie.all
    @genders = genders
  end 

  def create 
    @member = Member.new(member_params)
    if @member.save 
      set_member_movies
      flash[:successful] = true 
    else 
      flash[:errors] = @member.errors
      flash[:successful] = false 
    end
    redirect_to new_admin_member_url
  end
  
  def edit 
    @movies = Movie.all
    @genders = genders
  end

  def update  
    if @member.update(member_params)
      @member.movies.destroy_all
      set_member_movies
      flash[:successful] = true
    else 
      flash[:errors] = @member.errors
      flash[:successful] = false 
    end
    redirect_to edit_admin_member_url  
  end

  def destroy 
    params_ids = params[:members][:ids] 
    params_ids_array = params_ids.split(',') 
    @members = Member.where(id: params_ids_array) 
    if @members.present?
      @members.destroy_all 
      flash[:successful] = true 
    else 
      flash[:successful] = false 
    end
    redirect_to admin_members_url
  end
  
  private 

  def member_params
    params.require(:member).permit(:first_name, :last_name, :birthday, :gender, :overview, :picture) 
  end

  def set_member_movies
    movies_string = params[:movie][:titles] 
    movies_array = movies_string.split(',')
    movies = Movie.where(title: movies_array)
    movies.each do |movie| 
      Cast.find_or_create_by(movie: movie, member: @member)
    end
  end

  def set_member
    @member = Member.includes(:movies).find params[:id]
  end

  def genders 
    [ {name: "Male", value: "male"},
      {name: "Female", value: "female"} 
    ]
  end
 
end