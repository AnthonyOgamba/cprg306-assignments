"use client";

import { useState } from "react";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";
import itemsData from "./items.json";

export default function Week7Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="min-h-screen p-6 bg-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      {/* Simple Wireframe Section (Required) */}
      <div className="mb-6 border border-dashed border-white/30 p-4 rounded-xl">
        <p className="text-sm text-white/70 mb-2">Wireframe Layout</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-white/20 p-3 rounded-lg text-white/50">
            Form Area
          </div>
          <div className="border border-white/20 p-3 rounded-lg text-white/50">
            List Area
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="bg-slate-800 p-4 rounded-xl">
          <GroceryItemForm onAddItem={handleAddItem} />
        </section>

        <section className="bg-slate-800 p-4 rounded-xl">
          <ItemList items={items} />
        </section>
      </div>
    </main>
  );
}