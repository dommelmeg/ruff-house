class Sitter < Profile
    has_one_attached :image

    has_many :jobs
    has_many :pets, through: :jobs
end
