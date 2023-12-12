class Job < ApplicationRecord
    belongs_to :owner
    belongs_to :sitter, optional: true
    has_many :pets, through: :owner

    validates :start_date, :end_date, :description, presence: true
    validate :start_date_cannot_be_in_the_past, :end_date_cannot_be_in_the_past
    validate :create_job_overlap, on: :create
    validate :update_job_overlap, on: :update


    def period
        start_date..end_date
    end

    def job_pets
        self.owner.pets
    end

    def job_sitter
        self.sitter
    end

    def create_job_overlap
        user_jobs = Job.where(owner_id: self.owner.id)
        is_overlapping = user_jobs.any? do |job|
            period.overlaps?(job.period)
        end
        errors.add(:overlapping_jobs, "not allowed. Please change your dates.") if is_overlapping
    end

    def update_job_overlap
        user_jobs = Job.where(sitter_id: self.sitter.id)
        is_overlapping = user_jobs.any? do |job|
            period.overlaps?(job.period)
        end
        errors.add(:overlapping_jobs, "not allowed. Please choose a different job") if is_overlapping
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
