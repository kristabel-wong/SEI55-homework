class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :link
      t.text :image
      t.integer :votes
      t.text :text

      t.timestamps
    end
  end
end
