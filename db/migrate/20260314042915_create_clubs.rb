class CreateClubs < ActiveRecord::Migration[8.1]
  def change
    create_table :clubs do |t|
      t.string :external_id, null: false
      t.string :name, null: false
      t.text :description
      t.string :slug
      t.jsonb :raw_data, default: {}
      t.datetime :cached_at, null: false
      t.timestamps
    end
    add_index :clubs, :external_id, unique: true
    add_index :clubs, :slug, unique: true
  end
end
