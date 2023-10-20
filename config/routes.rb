Rails.application.routes.draw do
  
  resources :user_sitters
  resources :profiles
  resources :pets
  resources :user_owners
  resources :jobs
  resources :dogs
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
