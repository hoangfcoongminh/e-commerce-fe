interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className = "", ...props }: Props) {
  return (
    <div className="mb-4">
      <div className="mb-1">
        <label>
          {label}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      </div>

      <input
        className={`border border-gray-300 py-1 px-2.5 w-70 rounded-md focus:outline-none focus:border-2 focus:border-[var(--color-primary)] ${className}`}
        {...props}
      />
    </div>
  );
}
