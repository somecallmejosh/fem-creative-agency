Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get 'about', to: 'page#about'
  get 'contact', to: 'page#contact'
  root "page#index"
end
