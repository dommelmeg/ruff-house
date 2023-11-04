class AddProfilePicToSitters < ActiveRecord::Migration[6.1]
  def change
    add_column :sitters, :profile_pic, :string
  end
end
