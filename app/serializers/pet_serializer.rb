class PetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :gender, :age, :breed, :bio, :weight, :owner_id, :images

  belongs_to :owner

  def images
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

end
