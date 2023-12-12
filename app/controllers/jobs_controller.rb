class JobsController < ApplicationController
    # before_action :owner_user, only: [:create, :destroy, :update]

    def index
        jobs = Job.all.order(:start_date)
        render json: jobs
    end

    def create
        new_job = Job.create!(
            owner_id: params[:owner_id],
            start_date: params[:start_date],
            end_date: params[:end_date],
            description: params[:description],
        )

        render json: new_job, status: :created
    end

    def update
        job = Job.find_by(id: params[:id])
        job.update!(
            sitter_id: session[:profile_id]
        )
        render json: job
    end

    def destroy
        job = Job.find_by(id: params[:id])
        job.destroy
        head :no_content
    end

    def owner_index
        user_jobs = Job.where(owner_id: session[:profile_id]).order(:start_date)
        render json: user_jobs
    end

    def sitter_index
        user_jobs = Job.where(sitter_id: session[:profile_id]).order(:start_date)
        render json: user_jobs
    end


end
    