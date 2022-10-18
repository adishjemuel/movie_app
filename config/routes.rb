Rails.application.routes.draw do
  root to: "movies#index"

  devise_for :users

  resources :movies, shallow: true do
    resources :reviews
  end
  resources :movies
  resources :favorites
  resources :members
end
