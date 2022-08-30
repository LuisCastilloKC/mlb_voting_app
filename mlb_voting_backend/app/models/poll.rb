class Poll < ApplicationRecord
  has_many :player_names, dependent: :destroy
  validates :question, presence: true
end
