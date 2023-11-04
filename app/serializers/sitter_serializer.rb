class SitterSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :email, :first_name, :last_name, :city, :state, :daily_rate, :profile_id, :image

  has_many :jobs

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
