class PetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :gender, :breed, :bio, :weight, :owner_id, :images, :birth_date

  belongs_to :owner

  def images
    rails_blob_path(object.images, only_path: true) if object.images.attached?
  end

end
