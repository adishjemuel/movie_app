Rails.application.routes.draw do
  root to: "movies#index"

  devise_for :users

  resources :movies, shallow: true do
    resources :reviews
  end

  resources :users
  resources :genres
  resources :movies
  resources :movie_genres
  resources :casts
  resources :favorites
  resources :members
end
