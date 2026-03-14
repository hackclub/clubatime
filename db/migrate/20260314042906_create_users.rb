class CreateUsers < ActiveRecord::Migration[8.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :image
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :slack_id
      t.string :github_username
      t.date :birthday
      t.text :address
      t.integer :role, default: 0, null: false
      t.string :verification_status
      t.timestamps
    end
    add_index :users, [:provider, :uid], unique: true
    add_index :users, :email, unique: true
  end
end
