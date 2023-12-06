class JobSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :description, :owner_id, :sitter_id

  belongs_to :owner
  has_many :pets, through: :owner
end
