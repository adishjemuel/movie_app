class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_attached_file :avatar, default_url: "/images/default.jpeg"
  validates_attachment_content_type :avatar, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif", "image/webp"]
  validates :username, presence: true, uniqueness: true 
  validates :email, presence: true, uniqueness: true 

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :reviews, dependent: :destroy

  has_many :favorites
  has_many :movies, through: :favorites, dependent: :destroy

  enum role: { user: 0, admin_3: 1, admin_2: 2, admin_1: 3 } 

  attribute :avatar_url 
  attribute :avatar_name 
  attribute :role_name 

  def role_name 
    case role 
    when "user"
      role.capitalize 
    else 
      role.tr('_',' ').capitalize 
    end 
  end 
    

  def avatar_url 
    avatar.url 
  end 

  def avatar_name 
    avatar.original_filename 
  end


end
