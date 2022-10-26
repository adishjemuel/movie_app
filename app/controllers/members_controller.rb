class MembersController < ApplicationController
  
  def index
    @q = Member.ransack(params[:q])
    @members = @q.result.page params[:page] 
  end

  def show 
    @member = Member.includes(:movies).find params[:id]
  end

end