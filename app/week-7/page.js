"use client";

import { useState } from "react";
import itemsData from "./items.json";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";

export default function Week7Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen p-6 bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      {/* Wireframe (required) */}
      <section className="mb-6 rounded-xl border border-dashed border-slate-400/50 dark:border-white/30 p-4">
        <p className="text-sm font-semibold text-slate-700 dark:text-white/80 mb-3">
          Wireframe
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-300 dark:border-white/20 p-4">
            <p className="text-slate-600 dark:text-white/60 text-sm mb-2">
              Form Area
            </p>
            <div className="space-y-2">
              <div className="h-10 rounded bg-slate-200 dark:bg-white/10" />
              <div className="h-10 rounded bg-slate-200 dark:bg-white/10" />
              <div className="h-10 rounded bg-slate-200 dark:bg-white/10" />
              <div className="h-10 w-32 rounded bg-slate-300 dark:bg-white/20" />
            </div>
          </div>

          <div className="rounded-lg border border-slate-300 dark:border-white/20 p-4">
            <p className="text-slate-600 dark:text-white/60 text-sm mb-2">
              List Area
            </p>
            <div className="space-y-2">
              <div className="h-10 rounded bg-slate-200 dark:bg-white/10" />
              <div className="h-10 rounded bg-slate-200 dark:bg-white/10" />
              <div className="h-10 rounded bg-slate-200 dark:bg-white/10" />
            </div>
          </div>
        </div>
      </section>

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