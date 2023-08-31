import React, { useState } from "react";
import Apple from "./bodycomponents/Apple";

//API KEY=8f7f9ea97b4442039c85506018a442aa

export default function MainBody() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
      setIsExpanded((prevExpanded) => !prevExpanded);
    };
  
  return (
    <div>
      <h2 onClick={toggleExpansion} className="cursor-pointer">
        All articles mentioning Apple from yesterday, sorted by popular publishers first
      </h2>
      {isExpanded && (
        <div>
          
          <Apple/>
        </div>
      )}
    </div>
  );
}
