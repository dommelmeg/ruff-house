class Owner < Profile
    has_one_attached :image

    has_many :pets
    has_many :jobs
    has_many :sitters, through: :jobs
end
