import "../css/Filter.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";
import { useState } from "react";
import Projects from "./Projects";

//interface Props {
//  isSelected: boolean;
//  selectOption: () => void;
//}

const Filter = (/*{ isSelected, selectOption }: Props*/) => {
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

  const [logicOptions, setLogicOptions] = useState<{
    AND: boolean;
    OR: boolean;
  }>({
    AND: true,
    OR: false,
  });

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
  const selectOption = (id: string) => {
    setoptionArr((prevState) => {
      return prevState.map((option) => {
        return id === option.option
          ? { ...option, isSelected: !option.isSelected }
          : option;
      });
    });
  };
  const optionsComponent = optionArr.map((option) => {
    return (
      <Buttons
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
      <div className="overlay--backdrop" onClick={closeOverlay} />
      <div className="filter--container">
        <div className="filter--options">
          <div>
            <span
              onClick={() => handleLogicChange("AND")}
              className={logicOptions.AND ? "selected--logic logic" : "logic"}
            >
              AND
            </span>
            <span>/</span>
            <span
              onClick={() => handleLogicChange("OR")}
              className={logicOptions.OR ? "selected--logic logic" : "logic"}
            >
              OR
            </span>
          </div>
          <div className="options--container">{optionsComponent}</div>
          <Link
            state={[optionArr, logicOptions]}
            to={"/projects"}
            className="filter--submit"
          >
            Submit
          </Link>
        </div>
      </div>
    </>
  );
};

export default Filter;
