class AddStateToProfiles < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :state, :string
  end
end
