class Member < ApplicationRecord 
  has_many :casts 
  has_many :movies, through: :casts, dependent: :destroy
  
  paginates_per 20
  has_attached_file :picture, default_url: "/images/members/vector.jpeg"
  validates_attachment_content_type :picture, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  enum gender: { male: 0, female: 1 }

  attribute :picture_url, :string  
  attribute :birthday_date 

  def birthday_date 
    birthday.respond_to?(:strftime) ? birthday.strftime("%B %d, %Y"): "" 
  end

  def picture_url 
    picture.url 
  end
end 