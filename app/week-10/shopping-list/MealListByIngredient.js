"use client";

import { useEffect, useState } from "react";

async function fetchMealList(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meal list");
  }

  const data = await response.json();
  return data.meals || [];
}

export default function MealListByIngredient({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      setError("");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const results = await fetchMealList(ingredient);
      setMeals(results);
    } catch (err) {
      setError("Failed to load meal ideas.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4 text-white">Meal Ideas</h2>

      {!ingredient ? (
        <p className="text-slate-300">Select an item to see meal ideas.</p>
      ) : (
        <>
          <p className="mb-3 text-slate-300">
            Meals using <b>{ingredient}</b>
          </p>

          <div className="flex-1 overflow-y-auto pr-2 border border-slate-700 rounded-lg">
            {loading ? (
              <p className="text-slate-300 p-2">Loading meal ideas...</p>
            ) : error ? (
              <p className="text-red-300 p-2">{error}</p>
            ) : meals.length > 0 ? (
              <ul className="space-y-2 p-2">
                {meals.map((meal) => (
                  <li
                    key={meal.idMeal}
                    className="bg-slate-700 p-3 rounded-lg text-white"
                  >
                    {meal.strMeal}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-300 p-2">No meal ideas found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}