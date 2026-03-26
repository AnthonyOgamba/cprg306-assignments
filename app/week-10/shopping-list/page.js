"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../Contexts/AuthContext";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";
import MealListByIngredient from "./MealListByIngredient";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.push("/week-10");
    }
  }, [user, router]);

  useEffect(() => {
    async function loadItems() {
      if (!user) return;

      const userItems = await getItems(user.uid);
      setItems(userItems);
    }

    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    if (!user) return;

    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { id, ...newItem }]);
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

  if (!user) {
    return (
      <main className="min-h-screen p-6 bg-slate-900 text-white">
        <p>Redirecting to login...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white">
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Shopping List</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        <div className="space-y-6">
          
          {/* Add Item */}
          <section className="bg-slate-800 border border-zinc-800 rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-white">Add New Item</h2>
            <GroceryItemForm onAddItem={handleAddItem} />
          </section>

          {/* Items */}
          <section className="bg-slate-800 rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-white">Items</h2>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </section>
        </div>

        {/* Meal Ideas */}
        <section className="bg-slate-800 rounded-xl p-4 h-[860px] flex flex-col">
          <MealListByIngredient ingredient={selectedItemName} />
        </section>
      </div>
    </main>
  );
}