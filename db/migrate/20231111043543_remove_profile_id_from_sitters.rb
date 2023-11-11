class RemoveProfileIdFromSitters < ActiveRecord::Migration[6.1]
  def change
    remove_column :sitters, :profile_id, :integer
  end
end
