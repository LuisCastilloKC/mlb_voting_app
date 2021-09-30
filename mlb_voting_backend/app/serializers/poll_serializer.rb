class PollSerializer < ActiveModel::Serializer
  attributes :id, :question, :player_names
end
