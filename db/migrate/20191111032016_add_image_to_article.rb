class AddImageToArticle < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :image, :json
  end
end
