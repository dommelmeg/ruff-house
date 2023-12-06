class SitterSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  
  attributes :id, :first_name, :last_name, :username, :city, :state, :type, :email, :image_url

  has_many :jobs
end
