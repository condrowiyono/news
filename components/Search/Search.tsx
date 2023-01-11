import { useEffect, useState, useRef, useReducer } from "react";
import type { ReducerState, ReducerAction } from "react";
import useKeyPress from "@utils/hooks/useKeyPress";
import style from "./Search.module.css";

type StateType = {
  selectedIndex: number;
};
type ActionType = {
  type: string;
};
const list = ["Apple", "Orange", "Pineapple", "Banana"];

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "arrowUp":
      return {
        selectedIndex:
          state.selectedIndex !== 0 ? state.selectedIndex - 1 : list.length - 1,
      };
    case "arrowDown":
      return {
        selectedIndex:
          state.selectedIndex !== list.length - 1 ? state.selectedIndex + 1 : 0,
      };
    default:
      throw new Error();
  }
}

const Search = () => {
  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const escPressed = useKeyPress("Escape");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, { selectedIndex: 0 });

  useEffect(() => {
    if (arrowUpPressed) dispatch({ type: "arrowUp" });
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) dispatch({ type: "arrowDown" });
  }, [arrowDownPressed]);

  useEffect(() => {
    if (escPressed) setDropdownOpen(false);
  }, [escPressed]);

  return (
    <>
      <input
        aria-label="Search"
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        placeholder="Search"
        className={style.search}
      />
      {dropdownOpen && (
        <div className={style.dropdown}>
          {list.map((item, i) => (
            <div
              role="button"
              key={item}
              className={style.dropdownItem}
              aria-selected={i === state.selectedIndex}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
