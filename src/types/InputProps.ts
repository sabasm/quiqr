
export interface InputProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

