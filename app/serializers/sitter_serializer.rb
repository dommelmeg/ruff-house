class SitterSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :city, :state, :daily_rate, :profile_id
end
