class User < ApplicationRecord
    has_secure_password

    has_many :rights
    has_many :lists, through: :rights

    validates :username, {presence: true, uniqueness: true}
end
