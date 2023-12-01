class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  private

  def owner_user
    owner = Profile.find_by(type: 'Owner')
    return render json: { error: 'Only pet owners have access'}
    # status: :unauthorized unless session.include? :profile_id
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :profile_id
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Not found" }, status: :not_found
  end

end
