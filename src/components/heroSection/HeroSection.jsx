const HeroSection = () => {
    return (
        <section className="py-9 font-sora lg:flex gap-32 bg-mediumBlue text-white m-auto max-w-7xl px-4 items-center">
            <article className="w-full">
                <h1 className="font-bold text-5xl md:text-6xl md:leading-[70px] mb-10">
                    Impulsa el teu negoci, tria el millor barri
                </h1>
                <p className="font-thin text-xl">
                    Barris Vius és una plataforma digital que revitalitza el
                    comerç local a Barcelona, connectant els consumidors amb els
                    petits negocis dels barris. T’oferim informació detallada de
                    cada zona per ajudar-te a triar la millor ubicació pel teu
                    negoci i prendre decisions informades.
                </p>
            </article>
            <figure className="w-full mt-7 lg:mt-0">
                <img src="./hero.svg" alt="Imatge Barri" className="w-full" />
            </figure>
        </section>
    );
};

export default HeroSection;
