export default function Input({
    label,
    type = "text",
    placeholder,
    ...props
  }) {
    return (
      <div className="space-y-3">
        <label className="text-sm uppercase tracking-[3px] text-gray-400">
          {label}
        </label>
  
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-red-500"
          {...props}
        />
      </div>
    );
  }