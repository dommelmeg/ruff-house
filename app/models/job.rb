class Job < ApplicationRecord
    belongs_to :owner
    belongs_to :sitter, optional: true
    has_many :pets, through: :owner

    validates :start_date, :end_date, presence: true
    validate :date_cannot_be_in_the_past

    def job_pets
        self.owner.pets
    end

    def job_sitter
        self.sitter
    end

    def date_cannot_be_in_the_past
        if date.present? && date < Date.today
            errors.add(:date, "can't be in the past")
        end
    end
end
