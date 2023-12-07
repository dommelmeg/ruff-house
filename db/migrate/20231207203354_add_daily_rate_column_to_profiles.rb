class AddDailyRateColumnToProfiles < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :daily_rate, :integer
  end
end
