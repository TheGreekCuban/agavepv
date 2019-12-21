import React from "react";

export function TextArea(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
