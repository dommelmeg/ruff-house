class OwnerSerializer < ActiveModel::Serializer
  attributes :id

  has_many :pets
  has_many :jobs

end
