class PlayerName < ApplicationRecord
    belongs_to :poll
    validates :name, presence: true
end