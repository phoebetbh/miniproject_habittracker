// src/components/ProgressActions.jsx
import React from "react";

function ProgressActions({ total, completed }) {
  return (
    <div className="progress-summary">
      <p>
        Progress: {completed} / {total} habits completed today
      </p>
      <p className="subline">
        Lazy today? Try to keep on track, you can do it!
      </p>
    </div>
  );
}

export default ProgressActions;
