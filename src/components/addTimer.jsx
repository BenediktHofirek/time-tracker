import React from "react";

const AddTimer = ({ onClick }) => {
  let input;

  return (
    <div>
      <form
      className="form-group"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          } else {
            onClick(input.value);
          }
          input.value = "";
        }}
      >
      <label htmlFor="addTimer">Add Timer</label>
        <input type="text" className="form-control" id="addTimer" ref={node => (input = node)} />
        <button type="submit" className="btn btn-primary mt-2">Add Timer</button>
      </form>
    </div>
  );
};

export default AddTimer;
