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
