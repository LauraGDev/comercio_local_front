/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from './Modal';

const PopularCard = ({ name, image, description }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <>
            <div onClick={handleClick} className="cursor-pointer">
                <div className="overflow-hidden transition-transform duration-300 rounded-lg hover:scale-105 shadow-[0px_5px_15px_rgba(255,255,255,0.15)]">
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-full h-40 transition-transform duration-300"
                    />
                </div>
                <div className="p-4 text-center">
                    <p className="text-lg font-bold text-white font-sora">{name}</p>
                </div>
            </div>

            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                name={name}
                description={description}
            />
        </>
    );
};

export default PopularCard;