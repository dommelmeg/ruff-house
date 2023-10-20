class CreateUserSitters < ActiveRecord::Migration[6.1]
  def change
    create_table :user_sitters do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :state
      t.integer :daily_rate
      t.integer :profile_id

      t.timestamps
    end
  end
end
