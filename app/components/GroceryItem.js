export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center border rounded-md p-4">
      <span className="font-medium">{name}</span>
      <span className="text-sm text-gray-600">
        Buy {quantity} • {category}
      </span>
    </li>
  );
}