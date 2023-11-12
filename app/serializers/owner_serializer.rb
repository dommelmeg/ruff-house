class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :city, :state, :type, :email

  has_many :pets
  has_many :jobs

end
