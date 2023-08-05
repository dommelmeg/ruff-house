class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.date :start_date
      t.date :end_date
      t.string :location
      t.text :description

      t.timestamps
    end
  end
end
