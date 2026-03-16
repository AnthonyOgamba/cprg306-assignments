"use client";

import { useMemo, useState } from "react";

export default function GroceryItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const trimmedName = useMemo(() => name.trim(), [name]);
  const canSubmit = trimmedName.length > 0 && quantity >= 1;

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    const item = {
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2),
      name: trimmedName,
      quantity: Number(quantity),
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  const baseField =
    "rounded-lg px-3 py-2 border border-slate-300 bg-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:placeholder:text-slate-400";

  const fullField = `w-full ${baseField}`;
  const smallField = `w-24 ${baseField}`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className={fullField}
      />

      <div className="flex items-center gap-3">
        <label className="text-sm text-slate-300">Quantity</label>
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value || 1))}
          className={smallField}
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={fullField}
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen">Frozen</option>
        <option value="canned">Canned</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        disabled={!canSubmit}
        className={`rounded-lg px-4 py-2 font-semibold text-white transition ${
          canSubmit
            ? "bg-blue-600 hover:bg-blue-500"
            : "bg-slate-500 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </form>
  );
}