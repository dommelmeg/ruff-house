class Sitter < Profile
    has_many :jobs
    has_many :pets, through: :jobs
end
