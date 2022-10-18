class Member < ApplicationRecord 
  has_many :casts 
  has_many :movies, through: :casts, dependent: :destroy
  
  enum gender: { male: 0, female: 1 }
end 