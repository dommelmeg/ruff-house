class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender, :breed, :bio
end
