class AddRatingToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :rating, :integer
  end
end
