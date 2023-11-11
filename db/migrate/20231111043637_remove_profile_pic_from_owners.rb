class RemoveProfilePicFromOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :owners, :profile_pic, :string
  end
end
