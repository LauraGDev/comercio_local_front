import { useForm } from "react-hook-form";
import { forwardRef } from "react";
import useFetch from "../../customHooks/useFetch";

const FormSection = forwardRef((props, ref) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { data: districts } = useFetch("/barrisVius/neighborhoodsActivities");
    const { data: activities } = useFetch("/api/actividades-economicas");

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-7xl px-4 m-auto w-full md:w-[500px] pb-32 mt-10" ref={ref}>
            <h2 className="text-3xl font-bold mb-3">Vols obrir un negoci?</h2>
            <p className="font-thin mb-3">Selecciona el barri i l&apos;activitat econòmica del teu futur negoci per obtenir un informe personalitzat d&apos;intel·ligència de negoci.</p>
            <div className="mb-4">
                <label htmlFor="districts">Barri</label>
                <select
                    id="districts"
                    {...register("district", { required: true })}
                    className="block w-full mt-1 p-2 border text-darkBlue rounded-lg"
                >
                    <option value="" className="font-sora">Selecciona un barri</option>
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
                    className="block w-full mt-1 p-2 border text-darkBlue rounded-lg"
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
                className="bg-blueViolet text-white p-2 rounded-lg w-full mt-5"
            >
                Enviar
            </button>
        </form>
    );
});

FormSection.displayName = "FormSectionComponent";
export default FormSection;
