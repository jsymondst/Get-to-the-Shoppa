class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create, :login]


    def login
        @user = User.find_by(username: user_login_params[:username])
        if @user && @user.authenticate(user_login_params[:password])
            payload = encode_token({ user_id: @user.id, username: @user.username })
            render json: { user: UserSerializer.new(@user), jwt: payload }, status: :accepted
        else
            render json: { message: "Invalid username or password" }, status: :unauthorized
        end
    end

    def checkin
        puts current_user
        
        render json: {user: UserSerializer.new(current_user)}
    end

    private

    def user_login_params
        params.require(:user).permit(:username, :password)
    end
        

        

end
