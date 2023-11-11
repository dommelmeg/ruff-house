class RemoveEmailFromSitters < ActiveRecord::Migration[6.1]
  def change
    remove_column :sitters, :email, :string
  end
end
