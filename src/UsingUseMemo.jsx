import { useMemo, useState } from "react";

//Memoization: storing & reusing results of expensive function calls

//useMemo: returns a memoized function
//useCallback: returns a memoized value

function UsingUseMemo() {
  const [num, setNum] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const Square = useMemo(() => {
    return calculateSquare(num);
  }, [num]);

  const style = {
    backgroundColor: darkTheme ? "#000" : "#fff",
    color: darkTheme ? "#fff" : "#000",
  };

  function calculateSquare(num) {
    for (let i = 0; i < 200000000; i++) {}
    return num * num;
  }
  return (
    <div style={style}>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <p>{Square}</p>

      <button onClick={(e) => setDarkTheme((prevTheme) => !prevTheme)}>
        Change Theme
      </button>
    </div>
  );
}

export default UsingUseMemo;
