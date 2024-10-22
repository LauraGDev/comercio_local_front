import { forwardRef } from "react";

const PopularSections = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen bg-gray-200 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold mb-10">Barris populars</h2>
      <p className="w-4/5 text-center">Imágenes</p>
    </div>
  );
});

PopularSections.displayName = "PopularSectionsComponent";

export default PopularSections;