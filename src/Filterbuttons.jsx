
export function FilterButtons({
    selectedChapter,
    setSelectedChapter,
    selectedMainCategory,
    setSelectedMainCategory,
    selectedWeaponType,
    setSelectedWeaponType,
    selectedSource,
    setSelectedSource
    
}){
    const chapters = ['Totes', 'Capítol 1', 'Capítol 2', 'Capítol 3'];
    const mainCategory = ['Totes', 'Personatges', 'Armes', 'Items'];
    const weaponType = ['Totes', 'Espasa', 'Arc', 'Bastó'];
    const source = ['Totes', 'Joc', 'Merchandising', 'Altres'];

    return (
        <div>
            <div>
                <h3>Filtra per capítol:</h3>
                <div>
                    {chapters.map((chapter) => (
                        <button
                            key={chapter}
                            className={selectedChapter === chapter ? 'active' : ''}
                            onClick={() => console.log(`Filtrant per capítol: ${chapter}`)}
                        >
                            {chapter}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3>Filtra per categoria principal:</h3>
                <div>
                    {mainCategory.map((category) => (
                        <button
                            key={category}
                            className={selectedMainCategory === category ? 'active' : ''}
                            onClick={() => console.log(`Filtrant per categoria principal: ${category}`)}>
                            {category}
                        </button>
                    ))}
                </div>

                { selectedMainCategory === 'Armes' && (
                    <div>
                        <h3>Filtra per tipus d'arma:</h3>
                        <div>
                            {weaponType.map((type) => (
                                <button
                                    key={type}
                                    className={selectedWeaponType === type ? 'active' : ''}
                                    onClick={() => console.log(`Filtrant per tipus d'arma: ${type}`)}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <div>
                <h3>Filtra per llocs:</h3>
                <div>
                    {source.map((src) => (
                        <button
                            key={src}
                            className={selectedSource === src ? 'active' : ''}
                            onClick={() => console.log(`Filtrant per lloc: ${src}`)}>
                            {src}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}