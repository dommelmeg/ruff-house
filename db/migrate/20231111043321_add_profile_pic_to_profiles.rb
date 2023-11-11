class AddProfilePicToProfiles < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :profile_pic, :string
  end
end
