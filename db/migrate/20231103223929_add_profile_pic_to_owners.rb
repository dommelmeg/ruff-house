class AddProfilePicToOwners < ActiveRecord::Migration[6.1]
  def change
    add_column :owners, :profile_pic, :string
  end
end
