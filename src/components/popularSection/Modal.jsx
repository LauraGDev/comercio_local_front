/* eslint-disable react/prop-types */
const Modal = ({ show, onClose, district }) => {
    if (!show || !district) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative w-full max-w-4xl p-10 transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-xl">
                {/* Imagen del barrio */}
                <img 
                    src={district.image} 
                    alt={`Imagen de ${district.name}`} 
                    className="object-cover w-full h-64 mb-6 rounded-lg"
                />

                <h2 className="mb-6 text-3xl font-bold text-darkBlue">{district.name}</h2>

                <div className="mb-6 text-gray-700">
                    <p><strong>Número de negocios:</strong> {district.numBusinesses}</p>
                    <p><strong>Antigüedad promedio:</strong> {district.averageBusinessAge} años</p>
                    <p><strong>Diversidad de negocios:</strong> {district.diversity}</p>
                    <p><strong>Tamaño de los negocios:</strong></p>
                    <ul>
                        <li>Pequeños: {district.businessSize?.small || 'N/A'}</li>
                        <li>Medianos: {district.businessSize?.medium || 'N/A'}</li>
                        <li>Grandes: {district.businessSize?.large || 'N/A'}</li>
                    </ul>
                    <p><strong>Densidad geográfica:</strong> {district.density?.perSquareMeter || 'N/A'}</p>
                    <p><strong>Distancia promedio entre negocios:</strong> {district.density?.avgDistanceBetweenBusinesses || 'N/A'}</p>
                    <p><strong>Oportunidades y recomendaciones:</strong> {district.recommendations || 'N/A'}</p>
                </div>

                <button
                    onClick={onClose}
                    className="px-6 py-3 mt-8 text-white transition-all duration-200 ease-in-out rounded-full bg-blueViolet hover:bg-blue-600"
                >
                    Close
                </button>

                <div className="absolute w-8 h-8 rounded-full -bottom-3 -right-3 bg-blueViolet"></div>
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full -bottom-6 -right-12"></div>
            </div>
        </div>
    );
};

export default Modal;
