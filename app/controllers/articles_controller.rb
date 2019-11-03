class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
  end

  def show
  end

  def new
    @article = Article.new
  end

  def create
    slug = Article.slugify(article_params["title"])
    @article = Article.new(article_params.merge(
      :slug => slug,
      :user_id => current_user.id
    ))

    respond_to do |format|
      if @article.save
        format.html { redirect_to article_path, notice: "Article Created!" }
        format.json { render :show, status: :created, location: @article }
      else
        format.html { redirect_to new_article_path, notice: @article.errors }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def article_params
    params.require(:article).permit(
      :title,
      :content,
      :user_id,
      :slug
    )
  end
end
