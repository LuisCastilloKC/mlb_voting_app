Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :polls, only: [:index, :create, :update, :destroy]
resources :player_names, only: [:create, :update, :destroy]

end
