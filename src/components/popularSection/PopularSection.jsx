import { useState, useEffect } from 'react';
import PopularCard from './PopularCard';
import Modal from './Modal';
import { forwardRef } from "react";


const PopularSection = forwardRef((props, ref) => {
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/businessData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                setDistricts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleCardClick = (district) => {
        console.log(district);
        setSelectedDistrict(district);
    };

    const handleCloseModal = () => {
        setSelectedDistrict(null);
    };

    if (loading) {
        return <div>Cargando datos...</div>;
    }

    if (error) {
        return <div>Error al cargar los datos: {error}</div>;
    }

    return (
        <section ref={ref} className="py-14 bg-darkBlue">
            <div className="max-w-screen-lg px-6 mx-auto">
                <h2 className="mb-10 text-4xl text-center text-white font-sora">Els barris més populars</h2>
                <div className="mb-12">
                    <img src="/popular/panoramica.webp" alt="Foto aèria de Barcelona" className="object-cover w-full rounded-lg shadow-lg h-72" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {districts.map((district, index) => (
                        <PopularCard
                            key={index}
                            name={district.name}
                            image={district.image}
                            description={district.description}
                            onClick={() => handleCardClick(district)}
                        />
                    ))}
                </div>
            </div>

            {selectedDistrict && (
                <Modal
                    show={true}
                    onClose={handleCloseModal}
                    district={selectedDistrict}
                />
            )}
        </section>
    );
});

PopularSection.displayName = "PopularSectionComponent";

export default PopularSection;
