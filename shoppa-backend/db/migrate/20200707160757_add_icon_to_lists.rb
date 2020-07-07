class AddIconToLists < ActiveRecord::Migration[6.0]
  def change
    add_column :lists, :icon, :string
  end
end
