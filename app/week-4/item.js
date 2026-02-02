export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-900/60 border border-slate-700 rounded-lg p-4">
      <div className="flex items-start justify-between gap-4">
        <p className="text-lg font-semibold text-slate-100">{name}</p>
        <span className="text-sm font-medium text-slate-200 bg-slate-800 px-3 py-1 rounded-full">
            Qty: x{quantity}
        </span>
      </div>
      <p className="text-sm text-slate-300 mt-2 capitalize">{category}</p>
    </li>
  );
}
