interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({ loading, children, className = "", ...props }: Props) {
  return (
    <button
      className={`py-2 px-4 bg-[var(--color-button-bg)] text-white rounded hover:bg-[var(--color-button-bg-hover)] hover:cursor-pointer ${className}`}
      {...props}
      disabled={loading || props.disabled}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
