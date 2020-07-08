class List < ApplicationRecord

    has_many :rights, dependent: :destroy
    has_many :users, through: :rights

end
