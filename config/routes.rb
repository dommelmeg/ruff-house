Rails.application.routes.draw do
  
  resources :sitters
  resources :profiles
  resources :pets
  resources :owners
  resources :jobs

  post"/signup", to: "profiles#create"
  get "/me", to: "profiles#show"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
