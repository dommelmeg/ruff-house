class JobsController < ApplicationController
    # before_action :owner_user, only: [:create, :destroy, :update]

    def index
        jobs = Job.all
        render json: jobs
    end

    def create
        new_job = Job.create!(
            owner_id: session[:profile_id],
            start_date: params[:start_date],
            end_date: params[:end_date],
            description: params[:description],
        )
        render json: new_job, status: :created
    end

    def destroy
        job = Job.find_by(id: params[:id])
        job.destroy
        head :no_content
    end

    def owner_index
        user_jobs = Job.where(owner_id: session[:profile_id])
        render json: user_jobs
    end

    def sitter_index
        user_jobs = Job.where(sitter_id: session[:profile_id])
        render json: user_jobs
    end
end
    