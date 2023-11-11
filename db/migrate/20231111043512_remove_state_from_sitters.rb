class RemoveStateFromSitters < ActiveRecord::Migration[6.1]
  def change
    remove_column :sitters, :state, :string
  end
end
