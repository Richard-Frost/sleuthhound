class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :type
      t.integer :user_id
      t.integer :petfinder_id
      t.string :gender
      t.string :age
      t.string :pic
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
