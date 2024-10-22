import { forwardRef } from "react";

const Form = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen bg-gray-200 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold mb-10">Formulario</h2>
      <p className="w-4/5 text-center">
        <input type="text" />
      </p>
    </div>
  );
});

Form.displayName = "FormComponent";

export default Form;
