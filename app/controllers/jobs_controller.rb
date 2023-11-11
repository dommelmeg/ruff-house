class JobsController < ApplicationController
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
end
