class ProfileSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers

  attributes :id, :username, :email, :first_name, :last_name, :city, :state

end
