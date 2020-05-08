class CocktailsController < ApplicationController
  def index
    @cocktails = Cocktail.all
    # raise
  end

  def show
    # raise
    @cocktail = Cocktail.find(params[:id])
    @dose = Dose.new
  end

  def new
    @cocktail = Cocktail.new
  end

  def create
    @cocktail = Cocktail.new(params_cocktail)
    cycles = params[:cycles].to_i
    number = 1
    cycles.times do
      dose_ingredient = params["strIngredient#{number}"]
      dose_description = params["strMeasure#{number}"]
      ingredient_found = Ingredient.find_by(name: dose_ingredient)
      if ingredient_found.nil?
        ingredient = Ingredient.create(name: dose_ingredient)
      else
        ingredient = ingredient_found
      end
      @dose = Dose.new(description: dose_description, ingredient: ingredient)
      @dose.cocktail = @cocktail
      @dose.save
      number += 1
    end
    respond_to do |format|
      if @cocktail.save
        format.html { redirect_to cocktail_path(@cocktail), notice: "Successfully created cocktail"}
        format.json {}
      else
        format.html { render :new }
      end
    end
  end

  private

  def params_cocktail
    params.require(:cocktail).permit(:name, :image_url, :description, :photo, :preparation)
  end
end
