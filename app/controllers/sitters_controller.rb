class SittersController < ApplicationController
    def index
        sitters = Sitter.all.with_attached_image
        render json: sitters
    end

    def create
        new_sitter = Sitter.create!(sitter_params)
        render json: new_sitter, status: :created
    end

    private

    def sitter_params
        params.permit(:email, :first_name, :last_name, :city, :state, :image)
    end
end
