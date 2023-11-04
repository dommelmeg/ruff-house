class SittersController < ApplicationController
    def index
        sitters = Sitter.all.with_attached_image
        render json: sitters
    end

    private

    def owner_params
        params.permit(:email, :first_name, :last_name, :city, :state, :daily_rate, :image)
    end
end
