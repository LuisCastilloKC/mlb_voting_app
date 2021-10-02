class PlayerNameSerializer < ActiveModel::Serializer
  attributes :id, :name, :votes, :poll_id
end
