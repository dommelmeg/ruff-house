class JobsController < ApplicationController
    before_action :owner_user, only: [:create, :destroy, :update]

    def index
        jobs = Job.all
        render json: jobs
    end

    def create
        new_job = Job.create!(
            owner_id: session[:profile_id],
            sitter_id: session[:sitter_id],
            start_date: session[:start_date],
            end_date: session[:end_date],
        )
        render json: new_job, status: :create
    end

    def destroy
    end

    def update
    end

    def user_index
        user_jobs = Jobs.where(profile_id: session[:owner_id])
        render json: user_jobs.order('date')
    end
end
    