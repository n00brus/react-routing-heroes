import React, { useState } from "react";
function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
    clear: () => setValue(""),
    value: () => value,
  };
}
function AddHero({ onSubmit }) {
  let name = useInputValue("");
  let level = useInputValue("");
  let description = useInputValue("");
  // const { addHero } = useContext(Context);
  function submitHandler(event) {
    event.preventDefault();
    if (name.value().trim()) {
      onSubmit({
        name: name.value(),
        level: level.value(),
        description: description.value(),
      });

      name.clear();
      level.clear();
      description.clear();
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input placeholder='write hero name' {...name.bind} /> <br />
        <input placeholder='write hero level' {...level.bind} /> <br />
        <input placeholder='write hero description' {...description.bind} />
        <br />
        <button type='submit'> add Hero</button>
      </form>
    </div>
  );
}

export default AddHero;
