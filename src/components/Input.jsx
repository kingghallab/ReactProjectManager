export default function Input({ type, name, ref }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-stone-200 font-medium">{name}</label>
      <input ref={ref}
        required
        type={type}
        name={type}
        className="rounded-lg px-3 py-2 bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
}
