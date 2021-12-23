class UsersController < ApplicationController
    def index
        @user = User.all
        render json: @users
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            render json: { user: UserSerializer.new(@user) }, status: :created
        else 
            render json: {
                error: 'fail to create user'
            },
            status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :first_name, :last_name)
    end
end
