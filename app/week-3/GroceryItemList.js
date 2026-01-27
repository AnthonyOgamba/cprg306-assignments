import GroceryItem from "../components/GroceryItem";

export default function GroceryItemList() {
  const item1 = { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" };
  const item2 = { name: "bread 🍞", quantity: 2, category: "bakery" };

  const items = [item1, item2];

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <GroceryItem
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}