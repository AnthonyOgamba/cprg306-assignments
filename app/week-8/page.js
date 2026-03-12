"use client";

import { useState } from "react";
import itemsData from "./items.json";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";

export default function Week8Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .toLowerCase();

    if (cleanedName.includes("chicken")) cleanedName = "chicken";
    else if (cleanedName.includes("banana")) cleanedName = "banana";
    else if (cleanedName.includes("broccoli")) cleanedName = "broccoli";
    else if (cleanedName.includes("milk")) cleanedName = "milk";
    else if (cleanedName.includes("egg")) cleanedName = "egg";
    else if (cleanedName.includes("bread")) cleanedName = "bread";
    else if (cleanedName.includes("pasta")) cleanedName = "pasta";
    else if (cleanedName.includes("spaghetti")) cleanedName = "spaghetti";
    else if (cleanedName.includes("rice")) cleanedName = "rice";
    else if (cleanedName.includes("tomato")) cleanedName = "tomato";

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen p-6 bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div className="space-y-6">
          <section className="bg-slate-800 border border-zinc-800 rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-white">Add New Item</h2>
            <GroceryItemForm onAddItem={handleAddItem} />
          </section>

          <section className="bg-slate-800 rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-white">Items</h2>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </section>
        </div>

        <section className="bg-slate-800 rounded-xl p-4 h-[860px] flex flex-col">
          <MealIdeas ingredient={selectedItemName} />
        </section>
      </div>
    </main>
  );
}