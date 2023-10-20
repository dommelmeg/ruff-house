Rails.application.routes.draw do
  
  resources :sitters
  resources :profiles
  resources :pets
  resources :owners
  resources :jobs
  resources :dogs
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
