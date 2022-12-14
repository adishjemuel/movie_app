class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?
  rescue_from CanCan::AccessDenied, :with => :not_allowed

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user_params|
      user_params.permit(:username, :email, :password)
    end

    devise_parameter_sanitizer.permit(:account_update) do |account_update_params|
      account_update_params.permit(:username,
                                   :avatar,
                                   :current_password
                                  )
    end
  end

  def current_ability
    @current_ability ||= Ability.new(current_user,"") 
  end

  def record_not_found 
    redirect_to movies_url
  end

end
