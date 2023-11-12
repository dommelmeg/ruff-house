class ProfilesController < ApplicationController
    # skip_before_action :authorize, only: [:create]

    def index
        profile = Profile.all
        render json: profile
    end

    #signup
    def create
        new_profile = Profile.create(profile_params)
        render json: new_profile
    end

    #me
    def show
        profile = Profile.find_by(id: params[:id])
        render json: profile
    end

    private

    def profile_params
        params.permit(:username, :first_name, :last_name, :email, :city, :state, :password, :type)
    end
end
