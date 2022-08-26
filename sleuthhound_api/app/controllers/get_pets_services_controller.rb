class GetPetsServicesController < ApplicationController
  before_action :set_get_pets_service, only: [:show, :update, :destroy]

  # GET /get_pets_services
  def index
    @get_pets_services = GetPetsService.new.fetch_pets
    render json: @get_pets_services
  end

  # GET /get_pets_services/1
  def show
    render json: @get_pets_service
  end

  # POST /get_pets_services
  def create
    @get_pets_services = GetPetsService.new.fetch_pets(params)
    render json: @get_pets_services
  end

  def pets
    @get_pets_services = GetPetsService.new.fetch_pets(get_pets_service_params)
    render json: @get_pets_services
  end
  # PATCH/PUT /get_pets_services/1
  def update
    if @get_pets_service.update(get_pets_service_params)
      render json: @get_pets_service
    else
      render json: @get_pets_service.errors, status: :unprocessable_entity
    end
  end

  # DELETE /get_pets_services/1
  def destroy
    @get_pets_service.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_get_pets_service
      @get_pets_service = GetPetsService.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def get_pets_service_params
      params.permit(:get_pets_service, :type, :age, :zipcode, :status)
    end
end
