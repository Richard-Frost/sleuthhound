Rails.application.routes.draw do
  resources :clients
  resources :animals
  resources :users
  get '/pets'=> 'get_pets_services#index'
  post '/pets'=> 'get_pets_services#create'
  post '/agency' => 'users#agency'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
