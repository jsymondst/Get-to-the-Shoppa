class List < ApplicationRecord

    has_many :rights
    has_many :users, through: :rights

end
