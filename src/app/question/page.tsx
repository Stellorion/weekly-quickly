"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Checkbox } from "@/src/components/ui/checkbox"
import { Label } from "@/src/components/ui/label"
import { Separator } from "@/src/components/ui/separator"
import { Badge } from "@/src/components/ui/badge"
import { Input } from "@/src/components/ui/input"
import { X, Plus } from "lucide-react"

export default function Component() {
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([])
  const [selectedDislikes, setSelectedDislikes] = useState<string[]>([])
  const [customIngredient, setCustomIngredient] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [allergySearchTerm, setAllergySearchTerm] = useState("")

  const commonAllergies = [
    "Peanuts",
    "Tree nuts",
    "Milk/Dairy",
    "Eggs",
    "Fish",
    "Shellfish",
    "Soy",
    "Wheat/Gluten",
    "Sesame",
  ]

  const commonDislikes = [
    "Onions",
    "Garlic",
    "Mushrooms",
    "Tomatoes",
    "Peppers",
    "Cilantro",
    "Olives",
    "Pickles",
    "Spicy food",
    "Cheese",
    "Avocado",
    "Coconut",
  ]

  const handleAllergyChange = (allergy: string, checked: boolean) => {
    if (checked) {
      setSelectedAllergies([...selectedAllergies, allergy])
    } else {
      setSelectedAllergies(selectedAllergies.filter((item) => item !== allergy))
    }
  }

  const handleDislikeChange = (ingredient: string, checked: boolean) => {
    if (checked) {
      setSelectedDislikes([...selectedDislikes, ingredient])
    } else {
      setSelectedDislikes(selectedDislikes.filter((item) => item !== ingredient))
    }
  }

  const addCustomIngredient = () => {
    if (customIngredient.trim() && !selectedDislikes.includes(customIngredient.trim())) {
      setSelectedDislikes([...selectedDislikes, customIngredient.trim()])
      setCustomIngredient("")
    }
  }

  const removeDislike = (ingredient: string) => {
    setSelectedDislikes(selectedDislikes.filter((item) => item !== ingredient))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Tell us about your preferences</h1>
          <p className="mt-2 text-gray-600">
            Help us personalize your food recommendations by sharing your allergies and dislikes
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <span className="text-xl">⚠️</span>
              Food Allergies
            </CardTitle>
            <CardDescription>Select any food allergies you have. This is important for your safety.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                placeholder="Search allergies..."
                value={allergySearchTerm}
                onChange={(e) => setAllergySearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commonAllergies
                .filter((allergy) => allergy.toLowerCase().includes(allergySearchTerm.toLowerCase()))
                .map((allergy) => (
                  <div key={allergy} className="flex items-center space-x-2">
                    <Checkbox
                      id={`allergy-${allergy}`}
                      checked={selectedAllergies.includes(allergy)}
                      onCheckedChange={(checked) => handleAllergyChange(allergy, checked as boolean)}
                    />
                    <Label
                      htmlFor={`allergy-${allergy}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {allergy}
                    </Label>
                  </div>
                ))}
            </div>
            {selectedAllergies.length > 0 && (
              <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm text-red-800 font-medium">Selected allergies:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedAllergies.map((allergy) => (
                    <Badge key={allergy} variant="destructive" className="text-xs">
                      {allergy}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <span className="text-xl">👎</span>
              Ingredients You Don't Like
            </CardTitle>
            <CardDescription>Select ingredients you prefer to avoid in your meals.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {commonDislikes
                .filter((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((ingredient) => (
                  <div key={ingredient} className="flex items-center space-x-2">
                    <Checkbox
                      id={`dislike-${ingredient}`}
                      checked={selectedDislikes.includes(ingredient)}
                      onCheckedChange={(checked) => handleDislikeChange(ingredient, checked as boolean)}
                    />
                    <Label
                      htmlFor={`dislike-${ingredient}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {ingredient}
                    </Label>
                  </div>
                ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
              <Label className="text-sm font-medium">Add custom ingredient:</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter ingredient name..."
                  value={customIngredient}
                  onChange={(e) => setCustomIngredient(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addCustomIngredient()}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={addCustomIngredient}
                  disabled={!customIngredient.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {selectedDislikes.length > 0 && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800 font-medium mb-2">Ingredients you'll avoid:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedDislikes.map((ingredient) => (
                    <Badge
                      key={ingredient}
                      variant="secondary"
                      className="text-xs bg-green-100 text-green-800 hover:bg-green-200"
                    >
                      {ingredient}
                      <button onClick={() => removeDislike(ingredient)} className="ml-1 hover:text-green-600">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 flex gap-3">
          <Button variant="outline" className="flex-1">
            Back
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">Continue</Button>
        </div>
      </div>
    </div>
  )
}
