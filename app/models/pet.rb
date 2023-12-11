class Pet < ApplicationRecord
    # has_many_attached :images
    
    belongs_to :owner
    has_many :sitters, through: :jobs

    validates :name, :birth_date, :weight, :breed, :gender, presence: true
    validate :no_puppies

    def no_puppies
        months_ago = Date.today - 90
        if birth_date.present? && Date.parse(birth_date) > months_ago
            errors.add(:birth_date, "invalid. Doggo must be at least 3 months old")
        end
    end

end
