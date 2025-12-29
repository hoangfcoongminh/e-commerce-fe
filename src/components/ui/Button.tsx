interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({ loading, children, ...props }: Props) {
  return (
    <button {...props} disabled={loading || props.disabled}>
      {loading ? "Loading..." : children}
    </button>
  );
}