class Pet < ApplicationRecord
    # has_many_attached :images
    
    belongs_to :owner
    has_many :sitters, through: :jobs

    validates_presence_of :name, :birth_date, :weight, :breed, :gender
    validate :no_puppies

    def image_type
        if image_url.present? && !image_url.content_type.in?(%('image/jpeg image/png'))
            errors.add(:image_url, "invalid. Please use a real image.")
        end
    end

    def no_puppies
        months_ago = Date.today - 90
        if birth_date.present? && Date.parse(birth_date) > months_ago
            errors.add(:birth_date, "invalid. Doggo must be at least 3 months old")
        end
    end

end
