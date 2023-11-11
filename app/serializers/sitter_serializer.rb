class SitterSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :daily_rate

  has_many :jobs
end
