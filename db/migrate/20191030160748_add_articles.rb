class AddArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title, null: false, default: ""
      t.text :content, null: false, default: ""
    end
  end
end
