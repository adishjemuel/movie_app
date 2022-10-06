class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :reviews 

  has_many :favorites
  has_many :movies, through: :favorites 

  enum role: { user: 0, admin: 1 }
end
