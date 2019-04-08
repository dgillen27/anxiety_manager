class ExperiencesController < ApplicationController
  before_action :set_experience, only: [:show, :update, :destroy]

  # GET /experiences
  def index
    @user = User.find(params[:user_id])
    @experiences = Experience.where(user_id: @user.id)
    render json: @experiences
  end

  # GET /users/:user_id/experiences/:id
  def show
    @user = User.find(params[:user_id])
    @experience = Experience.find(params[:id])
    render json: @experience
  end

  # POST /users/:user_id/experiences
  def create
    @user = User.find(params[:user_id])
    @experience = Experience.new(experience_params)

    if @experience.save
      render json: @experience, status: :created
    else
      render json: @experience.errors, status: :unprocessable_entity
    end
  end

  # PUT /users/:user_id/experiences/:id
  def update
    @user = User.find(params[:user_id])
    @experience = Experience.find(params[:id])
    if @experience.update(experience_params)
      render json: @experience
    else
      render json: @experience.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/:user_id/experiences/:id
  def destroy
    @experience.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions
  def set_experience
    @experiences = Experience.find(params[:id])
  end

  def experience_params
    params.require(:experience).permit(:exp_type, :init_rating, :second_rating, :final_rating, :description, :user_id)
  end

end
