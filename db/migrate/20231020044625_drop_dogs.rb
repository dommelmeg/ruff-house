class DropDogs < ActiveRecord::Migration[6.1]
  def change
    drop_table :dogs
  end
end
