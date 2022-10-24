class Admin::BaseController < ApplicationController
  protect_from_forgery with: :exception
  
  rescue_from CanCan::AccessDenied, :with => :not_allowed
  rescue_from ActiveRecord::RecordNotFound, :with => :record_not_found
  def current_ability
    controller_name_segments = params[:controller].split('/')
    controller_name_segments.pop
    controller_namespace = controller_name_segments.join('/').camelize
    @current_ability ||= Ability.new(current_user, controller_namespace)
  end

  def not_allowed 
    redirect_to root_path 
  end

  def record_not_found 
    redirect_to admin_dashboard_url
  end
end