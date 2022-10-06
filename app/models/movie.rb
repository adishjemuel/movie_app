class Movie < ApplicationRecord
  has_many :reviews 
  
  has_many :casts
  has_many :members, through: :casts 
  
  has_many :favorites 
  has_many :users, through: :favorites
end