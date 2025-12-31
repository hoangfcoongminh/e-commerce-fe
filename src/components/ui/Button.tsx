interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({ loading, children, className = "", ...props }: Props) {
  return (
    <button
      className={`py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 hover:cursor-pointer ${className}`}
      {...props}
      disabled={loading || props.disabled}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
