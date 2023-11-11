class ProfileSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :username, :email, :first_name, :last_name, :city, :state, :image

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

end
