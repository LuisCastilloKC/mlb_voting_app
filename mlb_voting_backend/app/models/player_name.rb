class PlayerName < ApplicationRecord
    validates :name, presence: true
    belongs_to :poll


end