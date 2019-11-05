class AddTeaserTextToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :teaser, :text
  end
end
