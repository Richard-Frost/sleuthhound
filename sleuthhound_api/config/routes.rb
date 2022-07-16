Rails.application.routes.draw do
  resources :clients
  resources :animals
  resources :users
  
  get '/prospects'=> 'get_pets_services#pets'
  get '/agency' => 'users#agency'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
