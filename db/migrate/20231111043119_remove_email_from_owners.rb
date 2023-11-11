class RemoveEmailFromOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :owners, :email, :string
  end
end
