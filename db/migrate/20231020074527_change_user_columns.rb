class ChangeUserColumns < ActiveRecord::Migration[6.1]
  def change
    rename_column :jobs, :user_owner_id, :owner_id
    rename_column :jobs, :user_sitter_id, :sitter_id
  end
end
