class JobSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :description, :user_owner_id, :user_sitter_id
end
