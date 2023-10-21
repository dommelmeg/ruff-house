class ProfilesController < ApplicationController
    def index
        profile = Profile.all
        render json: profile
    end

    def create
        new_profile = Profile.create(profile_params)
        render json: new_profile
    end

    def show
        profile = Profile.find_by(id: params[:id])
        render json: profile
    end

    private

    def profile_params
        params.permit(:username, :password, :type)
    end
end
