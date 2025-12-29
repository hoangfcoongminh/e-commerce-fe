interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: Props) {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
}
