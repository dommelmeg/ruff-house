class RemovePasswordDigestFromUserOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_owners, :password_digest, :string
  end
end
