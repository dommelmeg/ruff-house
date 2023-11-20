class RemoveProfilePicFromProfiles < ActiveRecord::Migration[6.1]
  def change
    remove_column :profiles, :profile_pic, :string
  end
end
