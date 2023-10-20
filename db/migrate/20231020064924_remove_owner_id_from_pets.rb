class RemoveOwnerIdFromPets < ActiveRecord::Migration[6.1]
  def change
    remove_column :pets, :owner_id, :integer
  end
end
