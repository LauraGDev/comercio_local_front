/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Modal = ({ show, onClose, district }) => {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);


    if (!show || !district) {
        return null;
    }

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 modal-overlay" onClick={handleOutsideClick}>
            <div className="relative w-full max-w-4xl p-4 transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-xl md:p-10">
                <img
                    src={district.image}
                    alt={`Imagen de ${district.name}`}
                    className="object-cover w-full h-48 mb-4 rounded-lg md:h-64 md:mb-6"
                />
                <h2 className="mb-4 text-2xl font-bold md:text-3xl text-darkBlue">{district.name}</h2>
                <div className="mb-4 text-sm text-gray-700 md:text-base">
                    <p><strong>Número de negocis:</strong> {district.numBusinesses}</p>
                    <p><strong>Antiguitat mitjana:</strong> {district.averageBusinessAge} anys</p>
                    <p><strong>Diversitat de negocis:</strong> {district.diversity}</p>
                    <p><strong>Mida dels negocis:</strong></p>
                    <ul>
                        <li>Petits: {district.businessSize?.small || 'N/A'}</li>
                        <li>Mitjans: {district.businessSize?.medium || 'N/A'}</li>
                        <li>Grans: {district.businessSize?.large || 'N/A'}</li>
                    </ul>
                    <p><strong>Densitat geogràfica:</strong> {district.density?.perSquareMeter || 'N/A'}</p>
                    <p><strong>Distància mitjana entre negocis:</strong> {district.density?.avgDistanceBetweenBusinesses || 'N/A'}</p>
                    <p><strong>Oportunitats i recomanacions:</strong> {district.recommendations || 'N/A'}</p>
                </div>

                <button
                    onClick={onClose}
                    className="px-6 py-3 mt-8 text-white transition-all duration-200 ease-in-out rounded-full bg-blueViolet hover:bg-blue-600"
                >
                    Tancar
                </button>

                <div className="absolute w-8 h-8 rounded-full -bottom-3 -right-3 bg-blueViolet"></div>
                <div className="absolute w-4 h-4 bg-pink-400 rounded-full -bottom-6 -right-12"></div>
            </div>
        </div>
    );
};

export default Modal;
