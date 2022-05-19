import { ChangeEvent, useState } from "react";

function Sample() {
  const [state, setState] = useState<string>("하나");

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    // console.log("체인지");
    console.log(event.target.value);
  }

  

  return (
    <div>
      <select onChange={onChange}>
        <option value="하나">하나</option>
        <option value="둘">둘</option>
      </select>
    </div>
  );
}

export default Sample;
