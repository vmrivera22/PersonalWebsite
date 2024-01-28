import "../css/Filter.css";

interface Props {
  description: string;
  isSelected: boolean;
  selectOption: () => void;
}

// Component to dsiplay options for filter.
const FilterOptions = ({ description, isSelected, selectOption }: Props) => {
  return (
    <div
      onClick={selectOption}
      className={isSelected ? "black--bg option--button" : "option--button"}
    >
      {description}
    </div>
  );
};

export default FilterOptions;
