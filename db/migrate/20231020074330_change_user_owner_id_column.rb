class ChangeUserOwnerIdColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :pets, :user_owner_id, :owner_id
  end
end
