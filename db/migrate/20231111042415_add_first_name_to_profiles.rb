class AddFirstNameToProfiles < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :first_name, :string
  end
end
