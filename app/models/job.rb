class Job < ApplicationRecord
    belongs_to :owner
    belongs_to :sitter, optional: true
    has_many :pets, through: :owner

    validates :start_date, :end_date, :description, presence: true
    validate :start_date_cannot_be_in_the_past, :end_date_cannot_be_in_the_past

    def job_pets
        self.owner.pets
    end

    def job_sitter
        self.sitter
    end

    def start_date_cannot_be_in_the_past
        if start_date.present? && start_date < Date.today
            errors.add(:start_date, "Job can't start in the past")
        end
    end

    def end_date_cannot_be_in_the_past
        if end_date.present? && end_date < Date.today
            errors.add(:end_date, "Job can't end in the past")
        end
    end
end
