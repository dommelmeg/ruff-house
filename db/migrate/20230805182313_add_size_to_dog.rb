class AddSizeToDog < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :size, :integer
  end
end
