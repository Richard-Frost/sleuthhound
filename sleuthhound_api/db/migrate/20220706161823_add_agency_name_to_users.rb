class AddAgencyNameToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :agency_name, :string
  end
end
