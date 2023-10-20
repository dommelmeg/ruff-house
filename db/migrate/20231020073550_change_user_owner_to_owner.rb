class ChangeUserOwnerToOwner < ActiveRecord::Migration[6.1]
  def change
    rename_table :user_owners, :owners
  end
end
