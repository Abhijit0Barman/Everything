import React from "react";

function Container({ children  }) {
  return (
    <div className="container" data-testid="common-container">
      {children }
    </div>
  );
}

export default Container;
