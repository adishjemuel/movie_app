class Review < ApplicationRecord
  belongs_to :movie
  belongs_to :user 

  # attribute :user, :string

  attribute :review_user 

  attribute :created 

  def created 
    created_at.respond_to?(:strftime) ? created_at.strftime("%B %d, %Y"): ""
  end

  def review_user
    user 
  end 

end
