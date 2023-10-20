class CreateUserOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :user_owners do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
