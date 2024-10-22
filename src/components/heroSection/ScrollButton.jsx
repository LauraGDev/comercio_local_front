/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const ScrollButton = forwardRef(({ handleScroll, target }, ref) => {
    const handleButtonClick = () => {
        handleScroll(target);
      };

  return (
    <div ref={ref}
    className="flex justify-center items-center bg-mediumBlue pb-12">
      <button onClick={handleButtonClick} className="hover:opacity-90">
        <img src="./arrow-icon.svg" alt="Salta a la següent secció" />
      </button>
    </div>
  );
});

ScrollButton.displayName = "ScrollButtonsComponent";

export default ScrollButton;
