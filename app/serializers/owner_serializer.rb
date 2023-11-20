class OwnerSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :first_name, :last_name, :username, :city, :state, :type, :email

  has_many :pets
  has_many :jobs

end
