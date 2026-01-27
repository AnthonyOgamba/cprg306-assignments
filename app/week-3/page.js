import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <GroceryItemList />
    </main>
  );
}