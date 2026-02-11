import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-4">New Item</h1>
        <NewItem />
      </div>
    </main>
  );
}
