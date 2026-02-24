"use client";

import { useState } from "react";
import itemsData from "./items.json";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";

export default function Week6Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen p-6 bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="bg-slate-800 border border-zinc-800 rounded-xl p-4 md:h-[420px]">
          <h2 className="text-xl font-semibold mb-4 text-white">Add New Item</h2>
          <GroceryItemForm onAddItem={handleAddItem} />
        </section>

        <section className="bg-slate-800 rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Items</h2>
          <ItemList items={items} />
        </section>
      </div>
    </main>
  );
}
