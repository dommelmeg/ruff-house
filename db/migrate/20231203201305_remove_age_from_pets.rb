class RemoveAgeFromPets < ActiveRecord::Migration[6.1]
  def change
    remove_column :pets, :age, :integer
  end
end
