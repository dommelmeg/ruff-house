class RemoveCityFromOwners < ActiveRecord::Migration[6.1]
  def change
    remove_column :owners, :city, :string
  end
end
