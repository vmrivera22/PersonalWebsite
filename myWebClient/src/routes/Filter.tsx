import "../css/Filter.css";
import { Link, useNavigate } from "react-router-dom";
import FilterOptions from "../components/FilterOptions";
import { useState } from "react";
import FilterIcon from "../assets/filter.png";

// Route showing filter.
const Filter = () => {
  // Filter options available - If true then the option is selected.
  const [optionArr, setoptionArr] = useState<
    { option: string; isSelected: boolean }[]
  >([
    { option: "Typescript", isSelected: false },
    { option: "C", isSelected: false },
    { option: "C++", isSelected: false },
    { option: "Python", isSelected: false },
    { option: "OOP", isSelected: false },
    { option: "Networks", isSelected: false },
    { option: "Web Dev", isSelected: false },
    { option: "Shell Scripting", isSelected: false },
    { option: "Data Structures", isSelected: false },
    { option: "Makefile", isSelected: false },
    { option: "React", isSelected: false },
    { option: "CSS", isSelected: false },
    { option: "HTML", isSelected: false },
    { option: "Multithreaded", isSelected: false },
    { option: "Hardware", isSelected: false },
  ]);

  // State to select how to logically combine the selected options (AND or OR).
  const [logicOptions, setLogicOptions] = useState<{
    AND: boolean;
    OR: boolean;
  }>({
    AND: true,
    OR: false,
  });

  // Changes logic option based on what has been selected.
  const handleLogicChange = (input: any) => {
    if (
      (input === "AND" && logicOptions.AND) ||
      (input === "OR" && logicOptions.OR)
    ) {
      return;
    }
    return setLogicOptions((prevOptions) => {
      return { AND: !prevOptions.AND, OR: !prevOptions.OR };
    });
  };

  // Sets the option to true.
  const selectOption = (id: string) => {
    setoptionArr((prevState) => {
      return prevState.map((option) => {
        return id === option.option
          ? { ...option, isSelected: !option.isSelected }
          : option;
      });
    });
  };

  // Creates an option based on optionArr
  const optionsComponent = optionArr.map((option) => {
    return (
      <FilterOptions
        isSelected={option.isSelected}
        selectOption={() => selectOption(option.option)}
        description={option.option}
      />
    );
  });
  const navigate = useNavigate();
  const closeOverlay = () => {
    navigate("..");
  };
  return (
    <>
      <div className="overlay--backdrop black--op--bg" onClick={closeOverlay} />
      <div className="filter--container grey--bg">
        <label className="filter--icon">
          <img className="icon" src={FilterIcon} />
          Filter
        </label>
        <div className="filter--options">
          <div>
            <span
              onClick={() => handleLogicChange("AND")}
              className={logicOptions.AND ? "black logic" : "logic"}
            >
              AND
            </span>
            <span>/</span>
            <span
              onClick={() => handleLogicChange("OR")}
              className={logicOptions.OR ? "black logic" : "logic"}
            >
              OR
            </span>
          </div>
          <div className="options--container">{optionsComponent}</div>
          <Link
            state={[optionArr, logicOptions]}
            to={"/projects"}
            className="filter--submit white--bg black"
          >
            Submit
          </Link>
        </div>
      </div>
    </>
  );
};

export default Filter;
