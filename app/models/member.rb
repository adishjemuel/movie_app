class Member < ApplicationRecord 
  has_many :casts 
  has_many :movies, through: :casts, dependent: :destroy

  enum role: { actor: 0, 
               director: 1, 
               producer: 2, 
               executive_producer: 3, 
               script_supervisor: 4, 
               casting_director: 5 , 
               film_crew: 6 
              }
end 