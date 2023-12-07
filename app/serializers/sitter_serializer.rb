class SitterSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  
  attributes :id, :first_name, :last_name, :username, :city, :state, :type, :email, :image_url, :daily_rate

  has_many :jobs
end
