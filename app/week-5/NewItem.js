"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Added: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white/10 text-white p-4 rounded-lg space-y-4"
    >
      {/* Name */}
      <div className="space-y-2">
        <label className="block text-sm font-medium" htmlFor="name">
          Item name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Bread"
          className="w-full p-2 rounded-md bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Quantity + Category Row */}
      <div className="flex gap-3">
        {/* Quantity */}
        <div className="flex-1 space-y-2">
          <label className="block text-sm font-medium" htmlFor="quantity">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 rounded-md bg-zinc-800 text-white focus:outline-none"
        />

        </div>

        {/* Category */}
        <div className="flex-1 space-y-2">
          <label className="block text-sm font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold p-2 rounded-md transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
