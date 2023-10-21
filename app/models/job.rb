class Job < ApplicationRecord
    belongs_to :owner
    belongs_to :sitter, optional: true
end
