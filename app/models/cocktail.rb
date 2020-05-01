class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  has_one_attached :photo
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true, uniqueness: true
  validates :photo, presence: true

  def preparation_checkbox
    # this ensures that preparation checkbox works, dont ask me why either
  end
end
