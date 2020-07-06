Rails.application.routes.draw do
  resources :rights
  resources :lists
  resources :products
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/products/', to: 'products#index'
  post 'login', to: 'users#login'

  get '/checkin/', to: 'users#checkin'

end
