class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @articles = Article.all
  end

  def show
    get_article
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
        format.html { redirect_to article_path slug: @article.slug, notice: "Article Created!" }
        format.json { render :show, status: :created, location: @article }
      else
        format.html { redirect_to new_article_path, notice: @article.errors }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    get_article
  end

  def update
    @article = Article.find(params[:slug])

    respond_to do |format|
      if @article.update(article_params)
        format.html { redirect_to article_path slug: @article.slug, notice: "Article Updated!" }
        format.json { render :show, status: :created, location: @article }
      else
        format.html { redirect_to edit_article_path(slug: @article.slug), notice: @article.errors }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    get_article

    @article.destroy
    redirect_to articles_path, notice: "Article Successfully Deleted!"
  end

  private

  def article_params
    params.require(:article).permit(
      :title,
      :image,
      :content,
      :user_id,
      :slug,
      :teaser
    )
  end

  def get_article
    @article = Article.find_by slug: params[:slug]
  end
end
