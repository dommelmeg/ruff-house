class Job < ApplicationRecord
    belongs_to :owner
    belongs_to :sitter, optional: true
    has_many :pets, through: :owner
end
