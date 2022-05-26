Rails.application.routes.draw do
  resources :users
  get '/pets'=> 'get_pets_services#create'
  post '/pets'=> 'get_pets_services#create'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
