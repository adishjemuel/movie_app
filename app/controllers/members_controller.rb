class MembersController < ApplicationController
  
  before_action :set_member, only: %i[show edit update destroy]
  def index
    @q = Member.ransack(params[:q])
    @members = @q.result.page params[:page] 
  end

  def show 
    @movies = @member.movies 
  end

  def new 
  end

  def edit 
  end

  def create 
    @member = Member.new(member_params) 
    # if @member.save 
  end

  def update
    #if @member.update(member_params) 
  end

  def destroy 
    # if @member.destroy 
  end
  

  private 

  def member_params 
    params.require(:member).permit(:first_name, :last_name, :birthday, :gender, :role) 
  end

  def set_member 
    @member = Member.includes(:movies).find params[:id]
  end

end