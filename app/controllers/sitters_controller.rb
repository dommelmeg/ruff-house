class SittersController < ApplicationController
    def index
        sitters = Sitter.all
        render json: sitters
    end
end
