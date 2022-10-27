class Ability
  include CanCan::Ability

  def initialize(user, controller_namespace)

    case controller_namespace 
    when 'Admin'
      return unless user.present? 
      
      can :manage, user, id: user.id
      if user.admin_1? || user.admin_2?
        can [:read, :create], Movie 
        can [:read, :create], Review
        can [:read, :create], Genre 
        can [:read, :create], Member 
        # can :manage, User, user: user
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
    
      can :manage, user, id: user.id 
      
      can :manage, Favorite, user: user

      can :manage, Review, user: user 
    
      return unless user.admin_2? 

      can :manage, Review 
      
      return unless user.admin_3?
      can :manage, :all 
    end
  end
end
