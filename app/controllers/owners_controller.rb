class OwnersController < ApplicationController
    def index
        owners = Owner.all.with_attached_image
        render json: owners
    end

    def create
        new_owner = Owner.create!(owner_params)
        render json: new_owner, status: :created
    end

    def show
        owner = Owner.find_by(id: params[:id])
        render json: owner
    end

    private

    def owner_params
        params.permit(:email, :first_name, :last_name, :city, :state, :image)
    end

end
