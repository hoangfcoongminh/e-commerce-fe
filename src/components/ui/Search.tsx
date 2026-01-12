import { LuSearch } from "react-icons/lu";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Search({ className = "", ...props }: Props) {
  return (
    <div className="relative">
      <LuSearch className="absolute ml-3 mt-2.75 text-gray-400 text-xl" />
      <input
        className={`border border-gray-300 py-1 pl-9 pr-3 w-80 rounded-2xl leading-8 focus:outline-none focus:border-2 focus:border-[var(--color-primary)] ${className}`}
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        {...props}
      />
    </div>
  );
}
