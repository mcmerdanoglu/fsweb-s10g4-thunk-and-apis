import React, { useState } from "react";
import { toast } from "react-toastify";

function Item({ data }) {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="shadow-md bg-white text-center"
      onClick={() => setVisible(!visible)}
    >
      <p className="text-2xl p-10">{/*data.title*/ data.setup}</p>
      {visible && (
        <p className="text-xl p-10 bg-blue-100">
          {data.punchline} {toast.success(`Choose your side: 🤣||🤢||😶`)};
        </p>
      )}
    </div>
  );
}

export default Item;
