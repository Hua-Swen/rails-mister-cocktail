class AddPreparationToCocktails < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :preparation, :text
  end
end
