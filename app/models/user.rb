class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_attached_file :avatar, default_url: "/images/default.jpeg"
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :reviews, dependent: :destroy

  has_many :favorites
  has_many :movies, through: :favorites, dependent: :destroy

  enum role: { user: 0, admin: 1 }
end
