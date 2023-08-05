class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :breed
      t.text :bio

      t.timestamps
    end
  end
end
