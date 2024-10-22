import { useForm } from "react-hook-form";
import { forwardRef } from "react";
import useFetch from "../../customHooks/useFetch";

const FormSection = forwardRef((props, ref) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { data: districts } = useFetch("/api/barris");
    const { data: activities } = useFetch("/api/actividades-economicas");

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4" ref={ref}>
            <div className="mb-4">
                <label htmlFor="districts">Barri</label>
                <select
                    id="districts"
                    {...register("district", { required: true })}
                    className="block w-full mt-1 p-2 border"
                >
                    <option value="">Selecciona un barri</option>
                    {districts.map((district) => (
                        <option key={district.id} value={district.id}>
                            {district.nombre}
                        </option>
                    ))}
                </select>
                {errors.district && (
                    <span className="text-pink">Aquest camp és obligatori</span>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="activities">Activitat Econòmica</label>
                <select
                    id="activities"
                    {...register("activity", { required: true })}
                    className="block w-full mt-1 p-2 border"
                >
                    <option value="">Selecciona una activitat</option>
                    {activities.map((activity) => (
                        <option key={activity.id} value={activity.id}>
                            {activity.nombre}
                        </option>
                    ))}
                </select>
                {errors.activity && (
                    <span className="text-pink">Aquest camp és obligatori</span>
                )}
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
            >
                Enviar
            </button>
        </form>
    );
});

FormSection.displayName = "FormSectionComponent";
export default FormSection;