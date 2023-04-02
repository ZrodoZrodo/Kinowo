import { useState } from "react";

const InputForm = (props) => {
  return (
    <>
      <label className="label">
        <span className="label-text text-base text-pink">{props.label}</span>
      </label>
      <label className="input-group ">
        <input
          type={props.type}
          className="font-thin outline-none text-black  bg-transparent border-b-2 border-t-0 border-x-0 border-pink focus:rounded-none w-4/5"
          defaultValue={props.value}
          name={props.name}
        ></input>
      </label>
    </>
  );
};

export default InputForm;
