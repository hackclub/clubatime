class CreateSubmissions < ActiveRecord::Migration[8.1]
  def change
    create_table :submissions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :club, null: true, foreign_key: true
      t.string :name, null: false
      t.text :description
      t.string :code_url
      t.string :playable_url
      t.string :screenshot_url
      t.string :project_type
      t.jsonb :project_files, default: []
      t.string :hackatime_project
      t.decimal :hackatime_hours, precision: 8, scale: 2
      t.decimal :hours_override, precision: 8, scale: 2
      t.integer :status, default: 0, null: false
      t.text :justification
      t.text :feedback
      t.timestamps
    end
    add_index :submissions, :status
  end
end
