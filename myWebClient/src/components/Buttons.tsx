import "../css/Filter.css";

interface Props {
  description: string;
  isSelected: boolean;
  selectOption: () => void;
}

const Buttons = ({ description, isSelected, selectOption }: Props) => {
  return (
    <div
      onClick={selectOption}
      className={
        isSelected
          ? "option--selected option--button"
          : "option--unselected option--button"
      }
    >
      {description}
    </div>
  );
};

export default Buttons;
