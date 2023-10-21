class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :city, :state

  has_many :pets
  has_many :jobs
end
