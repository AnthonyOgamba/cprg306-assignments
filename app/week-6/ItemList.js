"use client";

import { useMemo, useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name"); // "name" | "category"

  const sortedItems = useMemo(() => {
    const copy = [...items];

    if (sortBy === "name") {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      copy.sort((a, b) => a.category.localeCompare(b.category));
    }

    return copy;
  }, [items, sortBy]);

  const btn = (active) =>
    `px-4 py-2 rounded-lg text-sm font-semibold transition border border-slate-700 ${
      active
        ? "bg-slate-950 text-white"
        : "bg-slate-900/60 text-slate-200 hover:bg-slate-800"
    }`;

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex gap-2">
        <button
          type="button"
          className={btn(sortBy === "name")}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>

        <button
          type="button"
          className={btn(sortBy === "category")}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      {/* Scrollable area */}
      <div className="flex-1 overflow-y-auto pr-2 scrollbar">
        {/* Grid list */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
