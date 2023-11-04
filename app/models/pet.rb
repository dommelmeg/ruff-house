class Pet < ApplicationRecord
    has_many_attached :images
    
    belongs_to :owner
    has_many :sitters, through: :jobs
end
