class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, Movie
    can :read, Review 
    can :read, Genre
    can :read, Member
    
    return unless user.present? 
    
    can :read, Favorite, user: user
    can :create, Favorite, user: user 
    can :destroy, Favorite, user: user 

    can :create, Review, user: user 
    can :update, Review, user: user
    can :destroy, Review, user: user
    
    return unless user.admin? 

    can :manage, :all 
  end
end
