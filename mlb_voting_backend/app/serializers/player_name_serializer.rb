class PlayerNameSerializer < ActiveModel::Serializer
  attributes :id, :name, :votes
end
