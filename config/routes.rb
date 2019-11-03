Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  get 'user/all', to: 'users#index'
  get 'user', to: 'users#show'
  delete 'user', to: 'users#destroy'

  resources :articles, path: "news", param: :slug

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "content#index"
end
