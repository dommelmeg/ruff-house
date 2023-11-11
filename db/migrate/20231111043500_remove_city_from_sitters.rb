class RemoveCityFromSitters < ActiveRecord::Migration[6.1]
  def change
    remove_column :sitters, :city, :string
  end
end
