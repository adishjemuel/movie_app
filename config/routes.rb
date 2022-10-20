Rails.application.routes.draw do
  root to: "movies#index"

  devise_for :users, controllers: { registrations: 'registrations'}
 
  resources :movies, shallow: true do
    resources :reviews
  end
  resources :movies, only: [:index, :show]
  resources :favorites, only: [:index, :create, :destroy]
  resources :members, only: [:index, :show] 


  namespace :admin do 
    get '/dashboard', to: 'home#index'
    resources :movies
  end
end
