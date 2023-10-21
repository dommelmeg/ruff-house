class PetsController < ApplicationController
    def index
        pets = Pet.all
        render json: pets
    end

    def create
        new_pet = Pet.create(pet_params)
        render json: new_pet, status: :created
    end

    private

    def pet_params
        params.permit(:name, :gender, :age, :breed, :bio, :weight, :owner_id)
    end
end
