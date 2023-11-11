class RemoveLastNameFromSitters < ActiveRecord::Migration[6.1]
  def change
    remove_column :sitters, :last_name, :string
  end
end
