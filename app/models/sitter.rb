class Sitter < Profile
    has_many :jobs
    has_many :owners, through: :jobs

    validates :daily_rate, presence: true
end
