class Pet < ApplicationRecord
    # has_many_attached :images
    
    belongs_to :owner
    has_many :sitters, through: :jobs

    validates :name, :birth_date, :weight, :breed, presence: true

end
