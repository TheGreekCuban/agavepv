import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{float: "right", marginBottom: 10, backgroundColor: "#107C10"}} className="btn waves-effect waves-light"  type="submit" name="action">
      {props.children}
    </button>
  );
}
