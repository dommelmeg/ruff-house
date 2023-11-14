class SessionsController < ApplicationController
  # skip_before_action :authorize, only: [:create]

  #login
  def create
    profile = Profile.find_by(username: params[:username])
    if profile&.authenticate(params[:password])
      session[:profile_id] = profile.id
      render json: profile, status: :created
    else
      render json: { error: {login: 'Invalid username or password'} }, status: :unauthorized unless session.include? :profile_id
    end
  end

  #logout
  def destroy
    session.delete :profile_id
    head :no_content
  end

end