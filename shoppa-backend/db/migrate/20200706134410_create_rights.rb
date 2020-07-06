class CreateRights < ActiveRecord::Migration[6.0]
  def change
    create_table :rights do |t|
      t.references :user, null: false, foreign_key: true
      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
