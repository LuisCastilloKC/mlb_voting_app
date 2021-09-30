class CreatePlayerNames < ActiveRecord::Migration[6.1]
  def change
    create_table :player_names do |t|
      t.string :name
      t.integer :votes, default: 0
      t.references :poll

      t.timestamps
    end
  end
end
