class RemoveProfileIdFromOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :owners, :profile_id, :integer
  end
end
