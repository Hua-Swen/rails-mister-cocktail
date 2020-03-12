class DosesController < ApplicationController
  def new
    @dose = Dose.new
    @cocktail = Cocktail.find(params[:cocktail_id])
    @ingredients = Ingredient.all
    # raise
  end

  def create
    # raise
    @dose = Dose.new(params_dose)
    @cocktail = Cocktail.find(params[:cocktail_id])
    @dose.cocktail = @cocktail
    # raise
    respond_to do |format|
      if @dose.save
        format.html { redirect_to cocktail_path(@cocktail), notice: "Successfully created dose"}
        format.json {}
      else
        format.html { render :new }
      end
    end
  end

  def destroy
    @dose = Dose.find(params[:id])
    @cocktail = Cocktail.find(params[:cocktail_id])
    @dose.destroy

    redirect_to cocktail_path(@cocktail)

    # raise
  end

  def params_dose
    params.require(:dose).permit(:description, :ingredient_id)
  end
end
