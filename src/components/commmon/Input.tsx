interface TProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<TProps> = ({ placeholder, onChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full lg:w-96 p-2 rounded-xl outline-none border focus:outline-none bg-neutral-50 text-neutral-700 placeholder:text-neutral-500 focus:placeholder:text-neutral-700"
    />
  );
};

export default Input;
