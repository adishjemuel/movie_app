class Ability
  include CanCan::Ability

  def initialize(user, controller_namespace)

    case controller_namespace 
    when 'Admin'
      return unless user.present? 

      if user.admin_1? || user.admin_2?
        can [:read, :create], Movie 
        can [:read, :create], Review
        can [:read, :create], Genre 
        can [:read, :create], Member 
        can [:read, :update], User, user: user
      end
      if user.admin_2?
        can [:update], Movie 
        can [:update], Review 
        can [:update], Genre 
        can [:update], Member 
      end
      can :manage, :all if user.admin_3?
    
    else 
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
    
      return unless user.admin_1? || user.admin_2? || user.admin_3?

      can :manage, :all 
    end
  end
end
