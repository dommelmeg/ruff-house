class RemoveStateFromOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :owners, :state, :string
  end
end
