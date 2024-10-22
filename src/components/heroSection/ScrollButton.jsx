const ScrollButton = () => {
    const handleScroll = () => {};

    return (
        <div className="flex justify-center items-center">
            <button onClick={handleScroll} className="hover:opacity-90">
                <img src="./arrow-icon.svg" alt="Salta a la següent secció" />
            </button>
        </div>
    );
};

export default ScrollButton;
