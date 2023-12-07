class RemoveDailyRateColumnFromSitters < ActiveRecord::Migration[6.1]
  def change
    remove_column :sitters, :daily_rate, :integer
  end
end
