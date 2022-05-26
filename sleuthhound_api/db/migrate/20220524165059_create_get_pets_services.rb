class CreateGetPetsServices < ActiveRecord::Migration[6.1]
  def change
    create_table :get_pets_services do |t|
      t.string :type
      t.string :age
      t.string :zipcode
      t.string :status

      t.timestamps
    end
  end
end
