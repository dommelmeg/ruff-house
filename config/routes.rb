Rails.application.routes.draw do
  
  # resources :sitters
  resources :profiles
  resources :sitters
  resources :profiles, as: :owners
  resources :pets
  # resources :owners
  resources :jobs

  post "/signup", to: "profiles#create"
  get "/me", to: "profiles#show"
  
  post "/signin", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/userjobs', to: 'jobs#user_index'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
