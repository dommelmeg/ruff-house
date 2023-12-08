class Job < ApplicationRecord
    belongs_to :owner
    belongs_to :sitter, optional: true
    has_many :pets, through: :owner

    def job_pets
        self.owner.pets
    end

    def job_sitter
        self.sitter
    end
end
