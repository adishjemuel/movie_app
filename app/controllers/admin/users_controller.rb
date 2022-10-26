
class Admin::UsersController < Admin::BaseController
   
  load_and_authorize_resource
  def index 
    @users = User.all
  end

  def new 
    @roles = roles
  end 

  def create 
    @user = User.new(user_params)
    if @user.save 
      flash[:successful] = true 
    else 
      flash[:errors] = @user.errors
      flash[:successful] = false 
    end
    redirect_to new_admin_user_url
  end
  
  def edit 
    @roles = roles
    @user = User.find(params[:id])
  end 

  def update 
    @user = User.find(params[:id]) 
    if @user.update_without_password(user_params) 
      flash[:successful] = true 
    else 
      flash[:errors] = @user.errors
      flash[:successful] = false 
    end 
    redirect_to edit_admin_user_url
  end
  
  def destroy 
    params_ids = params[:users][:ids] 
    params_ids_array = params_ids.split(',') 
    @users = User.where(id: params_ids_array) 
    if @users.present? 
      @users.destroy_all 
      flash[:successful] = true 
    else 
      flash[:successful] = false 
    end 
    redirect_to admin_users_url 
  end 

  private  

  def user_params 
    params.require(:user).permit(:email, :username, :password, :avatar, :role)
  end

  def roles 
    [ {name: "User", value: "user"},
      {name: "Admin 3", value: "admin_3"}, 
      {name: "Admin 2", value: "admin_2"},
      {name: "Admin 1", value: "admin_1"} 
    ]
  end

end