class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :age, :breed, :bio, :weight, :owner_id
end
