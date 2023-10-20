class RemoveUsernameFromUserOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_owners, :username, :string
  end
end
