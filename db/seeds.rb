# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'json'
require 'faker'

puts "destroying db"
# Ingredient.destroy_all
# Cocktail.destroy_all

puts "creating ingredients"
url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"

api_file = open(url).read
api_doc = JSON.parse(api_file)

ingredients = api_doc.flatten
ingredients.delete_at(0)



ingredients[0].each do |ingredient|
  ingredient = Ingredient.new(name: ingredient["strIngredient1"])
  ingredient.save
end

# puts Ingredient.all

puts "ingredients created"

puts "creating cocktails"

10.times do
  cocktail = Cocktail.new(name: Faker::Beer.name)
  cocktail.save
end

puts "cocktails created"

puts "linking via doses"

# puts Cocktail.all.name

# Cocktail.all.each do |cocktail|
#   ingredient = Ingredient.all.sample
#   puts ingredient
#   puts cocktail
#   Dose.create!(description: "test", cocktail_id: cocktail.id, ingredient_id: ingredient.id)
# end

puts "done"
