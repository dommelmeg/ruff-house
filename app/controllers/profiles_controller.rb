class ProfilesController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        profile = Profile.all
        render json: profile
    end

    #signup
    def create
        profile = Profile.create!(profile_params)
        session[:profile_id] = profile.id
        render json: profile, status: :created
    end

    #me
    def show
        current_profile = Profile.find(session[:profile_id])
        render json: current_profile
    end

    def update
        profile = Profile.where(id: session[:profile_id])
        profile.update(profile_params)
        render json: profile
    end

    private

    def profile_params
        params.permit(:username, :first_name, :last_name, :email, :city, :state, :password, :type)
    end
end
