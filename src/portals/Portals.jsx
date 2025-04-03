import React, { useState } from "react";
import { createPortal } from "react-dom";

const Portals = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div style={{ border: "1px solid black", margin: "100px" }}>
        <button
          style={{ margin: "20px 40%" }}
          onClick={() => setShowModal(true)}
        >
          Show Modal using a Portal
        </button>
        {showModal &&
          createPortal(
            <div style={{margin:"0 100px"}}>
              <div>I'm a modal dialog</div>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
};

export default Portals;
