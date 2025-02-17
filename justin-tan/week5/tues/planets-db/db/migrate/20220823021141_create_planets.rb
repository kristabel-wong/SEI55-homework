class CreatePlanets < ActiveRecord::Migration[5.2]
  def change

    create_table :planets do |t|

      # INSTEAD of SQL
      # CREATE TABLE planets (id INTEGER, name TEXT, ...)

      # In Rails, we use a DB-abstracted Ruby style for 
      # creating table structure; this prevents us from
      # needing to think about what the underlying DB system
      # even is; i.e. it would be easy to switch from one DB
      # system to another if we need to

      # NO NEED to create an 'id' column - it's so essential
      # and ubiquitous that it's always made for us, automatically

      t.string  :name      # a string-type column called 'name'
      t.text    :image_url # a longer text column for the image URL
      t.float   :orbit     # a float for the orbit time
                           # (expressed as a fraction fo earth's orbit time)
      t.float   :mass      # mass, as a proportion of earth's mass
      t.integer :moons     # number of moons

    end # create table

  end # change

end # class CreatePlanets


t.string :name
      t.string :chef
      t.string :location
      t.string :cuisine
      t.integer :year
      t.float :price_range
      t.text :description
      t.text :restaurant_img
      t.string :dish
      t.text :dish_img
