class UsersController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :get_user, except: [:index]

  def show

  end

  def index
    @users = User.all
  end

  def destroy
    User.destroy(@user.id)
    redirect_to root_path, notice: "User Successfully Deleted!"
  end

  private

  def get_user
    @user = current_user
  end
end
