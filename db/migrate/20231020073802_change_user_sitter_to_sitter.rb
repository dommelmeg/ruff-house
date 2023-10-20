class ChangeUserSitterToSitter < ActiveRecord::Migration[6.1]
  def change
    rename_table :user_sitters, :sitters
  end
end
