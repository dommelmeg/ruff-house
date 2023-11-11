class RemoveProfilePicFromSitters < ActiveRecord::Migration[6.1]
  def change
    remove_column :sitters, :profile_pic, :string
  end
end
