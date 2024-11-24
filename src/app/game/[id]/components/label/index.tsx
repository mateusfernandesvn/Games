interface LabelProps {
  name: string;
}

export function Label({ name }: LabelProps) {
  return (
    <div className="flex-grow sm:flex-grow-0 py-1 px-3 font-bold bg-purple-600 text-center rounded-lg hover:bg-purple-700 duration-300 ">
     {name}
    </div>
  );
}
