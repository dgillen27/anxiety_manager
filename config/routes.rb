Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'user_token' => 'user_token#create'
  # root 'home#index'
  post "/users/login", to: 'users#login'
  resources :users do
    resources :experiences
  end
  get "/experiences", to: "experiences#all"
end
