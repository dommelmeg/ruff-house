class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.string :breed
      t.text :bio
      t.integer :weight
      t.integer :owner_id

      t.timestamps
    end
  end
end
