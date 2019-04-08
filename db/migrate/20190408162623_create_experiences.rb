class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :exp_type
      t.integer :init_rating
      t.integer :second_rating
      t.integer :final_rating
      t.text :description

      t.timestamps
    end
  end
end
