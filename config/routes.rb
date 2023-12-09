Rails.application.routes.draw do
  
  # resources :sitters
  resources :profiles
  resources :sitters
  resources :pets
  resources :jobs
  resources :owners

  post "/signup", to: "profiles#create"
  get "/me", to: "profiles#show"
  
  post "/signin", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/userjobs', to: 'jobs#owner_index'
  get '/userpets', to: 'pets#user_index'
  get '/sitterjobs', to: 'jobs#sitter_index'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
