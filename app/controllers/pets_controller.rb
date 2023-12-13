class PetsController < ApplicationController
    # before_action :owner_user, only: [:create, :destroy, :update]

    def index
        pets = Pet.all
        render json: pets
    end

    def create
        new_pet = Pet.create!(
            owner_id: session[:profile_id],
            name: params[:name],
            gender: params[:gender],
            birth_date: params[:birth_date],
            breed: params[:breed],
            bio: params[:bio],
            weight: params[:weight],
            image_url: params[:image_url]
        )
        render json: new_pet, status: :created
    end

    def update
        pet = Pet.find_by(id: params[:id])
        pet.update!(
            image_url: params[:image_url]
        )
        render json: pet
    end

    def destroy
        pet = Pet.find_by(id: params[:id])
        pet.destroy
        head :no_content
    end

    def user_index
        user_pets = Pet.where(owner_id: session[:profile_id])
        render json: user_pets
    end

    private

    def pet_params
        params.permit(:name, :gender, :birth_date, :breed, :bio, :weight, :owner_id, :image_url)
    end
end
