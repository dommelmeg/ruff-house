class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :avatar, :email, :city, :state, :type
end
