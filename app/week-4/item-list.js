import Item from "./item";
import items from "./items.json";

export default function ItemList({ title }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
