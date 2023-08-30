export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null)
    }

    return (
        <div className="characters">
            <h1> Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>
                Volver al Home
            </span>
            <div className="container-characters">
                {characters.map((characters, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={characters.image} alt={characters.name} />
                        </div>
                        <div>
                            <h3>{characters.name}</h3>
                            <h6>{characters.status === "Alive" ? (
                                <>
                                    <span className="alive" />
                                    Vivo
                                </>
                            ) : (
                                <>
                                    <span className="dead" />
                                    Muerto
                                </>
                            )}
                            </h6>
                            <p>
                                <span className="text-grey">Género: </span>
                                {characters.gender === "Male" ? (
                                    <>
                                        <span className="Male" />
                                        Masculino
                                    </>
                                ) : characters.gender === "Female" ? (
                                    <>
                                        <span className="Female" />
                                        Femenino
                                    </>
                                ) : (
                                    <>
                                        <span className="Unknown" />
                                        Desconocido
                                    </>
                                )}
                            </p>
                            <p>
                                {characters.type ? (
                                    <>
                                        <span className="text-grey">Tipo: </span>
                                        <span>{characters.type}</span>
                                    </>
                                ) : null}
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                {characters.species === "Human" ? (
                                    <>
                                        <span className="Humano" />
                                        Humano
                                    </>
                                ) : (
                                    <>
                                        <span className="Alien" />
                                        Alien
                                    </>
                                )}
                            </p>
                            <p>
                                <span className="text-grey">Origen: </span>
                                <span>
                                    {characters.origin.name === "unknown" ? "Desconocido" : characters.origin.name}
                                </span>
                            </p>
                            <p>
                                <span className="text-grey">Localidad: </span>
                                <span>
                                    {characters.location.name === "unknown" ? "Desconocido" : characters.location.name}
                                </span>
                            </p>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{characters.episode.length}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>
                Volver al Home
            </span>
        </div>
    )
}
