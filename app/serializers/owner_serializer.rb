class OwnerSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :email, :first_name, :last_name, :city, :state, :image

  has_many :pets
  has_many :jobs

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
