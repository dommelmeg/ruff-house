class JobSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :location, :description
end
