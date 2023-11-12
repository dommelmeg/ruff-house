class Profile < ApplicationRecord
    has_secure_password
    has_one_attached :image

    # validates: :username, uniqueness: true
end
