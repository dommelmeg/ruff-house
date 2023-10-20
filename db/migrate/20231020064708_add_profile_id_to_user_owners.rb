class AddProfileIdToUserOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :user_owners, :profile_id, :integer
  end
end
