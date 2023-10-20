class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.date :start_date
      t.date :end_date
      t.text :description
      t.integer :user_owner_id
      t.integer :user_sitter_id

      t.timestamps
    end
  end
end
