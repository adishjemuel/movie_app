Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "/admin" do 
    resources :users 
  end

  root to: "movies#index" 

  resources :movies do 
    resources :members, shallow: true
    resources :genres, shallow: true
    resources :reviews, shallow: true
  end
  resources :movies, only: [:index,:show]
end
