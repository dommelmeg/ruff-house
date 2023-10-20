class AddUserOwnerIdToPets < ActiveRecord::Migration[6.1]
  def change
    add_column :pets, :user_owner_id, :integer
  end
end
