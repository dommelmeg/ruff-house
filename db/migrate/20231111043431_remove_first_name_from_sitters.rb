class RemoveFirstNameFromSitters < ActiveRecord::Migration[6.1]
  def change
    remove_column :sitters, :first_name, :string
  end
end
