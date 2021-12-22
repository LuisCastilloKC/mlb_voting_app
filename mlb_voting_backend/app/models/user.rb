class User < ApplicationRecord
    # has secure password come from Bcrypt to have a secure password for user
    has_secure_password
    validates :username, uniquess: { case_sensitive: false }
end
