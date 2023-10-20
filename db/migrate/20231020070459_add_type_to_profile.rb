class AddTypeToProfile < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :type, :string
  end
end
