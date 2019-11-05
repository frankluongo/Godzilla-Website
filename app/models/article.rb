class Article < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user

  def self.slugify(title)
    # title.downcase.gsub(/[^0-9A-Za-z]/, '')
    title.downcase.gsub(/[^a-zA-Z. ]/, '').gsub(" ", "-");
  end
end
