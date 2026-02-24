export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-lg p-4 border border-slate-200 bg-white 
                   dark:border-slate-700 dark:bg-slate-900/60">
      
      <div className="flex items-start justify-between gap-4">
        
        <p className="text-lg font-semibold text-slate-900 
                      dark:text-slate-100">
          {name}
        </p>

        <span className="text-sm font-medium px-3 py-1 rounded-full
                         bg-slate-200 text-slate-800
                         dark:bg-slate-800 dark:text-slate-200">
          Qty: x{quantity}
        </span>

      </div>

      <p className="text-sm mt-2 capitalize
                    text-slate-600 
                    dark:text-slate-300">
        {category}
      </p>
    </li>
  );
}
