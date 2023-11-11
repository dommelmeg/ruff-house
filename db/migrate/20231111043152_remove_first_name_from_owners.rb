class RemoveFirstNameFromOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :owners, :first_name, :string
  end
end
