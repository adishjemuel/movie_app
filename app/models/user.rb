class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_attached_file :avatar, default_url: "/images/default.jpeg"
  validates_attachment_content_type :avatar, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :reviews, dependent: :destroy

  has_many :favorites
  has_many :movies, through: :favorites, dependent: :destroy

  enum role: { user: 0, admin: 1 }
end
