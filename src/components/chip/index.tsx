interface ChipProps {
  type: "success" | "error" | "warning";
  title: string;
}
const Chip: React.FC<ChipProps> = ({ type, title }) => {
  if (type === "success") {
    return (
      <div className="flex bg-green-50 rounded-full px-0.5 py-2 text-center text-sm text-green-700 h-6 w-[64px] justify-center items-center border border-green-200 border-solid ">
        {title}
      </div>
    );
  }
  return <></>;
};

export default Chip;
