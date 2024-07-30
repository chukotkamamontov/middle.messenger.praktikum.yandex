export type FileInputProps = {
  events?: {
    change: (event: Event) => void;
  };
  label?: string;
  onChange?: (event: Event) => void;
}
