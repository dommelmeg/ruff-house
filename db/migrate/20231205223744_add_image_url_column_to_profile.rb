class AddImageUrlColumnToProfile < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :image_url, :string
  end
end
