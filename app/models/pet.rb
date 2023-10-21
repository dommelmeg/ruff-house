class Pet < ApplicationRecord
    belongs_to :owner
    has_many :sitters, through: :jobs
end
