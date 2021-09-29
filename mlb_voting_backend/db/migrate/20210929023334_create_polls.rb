class CreatePolls < ActiveRecord::Migration[6.1]
  def change
    create_table :polls do |t|
      t.string :question
      t.string :player_name
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
