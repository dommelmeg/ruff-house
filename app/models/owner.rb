class Owner < ApplicationRecord
    has_many :pets
    has_many :jobs
    has_many :sitters, through: :jobs
end
