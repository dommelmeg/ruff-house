class JobSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :description, :owner_id, :sitter_id

  belongs_to :owner
end
