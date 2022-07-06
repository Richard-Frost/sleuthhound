class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :type
      t.integer :user_id
      t.integer :petfinder_id

      t.timestamps
    end
  end
end
