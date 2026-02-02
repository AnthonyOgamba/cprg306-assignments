import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen p-8 bg-slate-950 text-slate-100">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList title="My Shopping List" />
    </main>
  );
}
