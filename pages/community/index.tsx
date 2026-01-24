import { useState } from "react";
// Pages Router renders Client side by default, but _document.tsx file is used to render Server side

const Community = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};

export default Community;
