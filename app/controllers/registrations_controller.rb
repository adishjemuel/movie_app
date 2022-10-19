class RegistrationsController < Devise::RegistrationsController

  protected 

  def update_resource(resource, params) 
    if params[:avatar].present?
      resource.update_without_password(params) 
    else 
      super 
    end 
  end
end