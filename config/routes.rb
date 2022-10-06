Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "/admin" do 
    resources :users 
  end

  root to: "movies#index" 
  
  resources :movies, shallow: true do 
    resources :genres
    resources :reviews
  end 
  
  resources :members
  resources :favorites 
  resources :casts

end
