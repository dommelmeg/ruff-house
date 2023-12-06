class PetSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers

  attributes :id, :name, :gender, :breed, :bio, :weight, :owner_id, :birth_date, :image_url

  belongs_to :owner

end
