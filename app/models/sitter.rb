class Sitter < Profile
    has_many :jobs
    has_many :pets, through: :jobs

    # validates :daily_rate, presence: true
end
