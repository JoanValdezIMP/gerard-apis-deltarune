
import './Filterbuttons.css'

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
    const chapters = ['All', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'];
    const mainCategory = ['All', 'Consumable', 'Weapon', 'Armor', 'Key Item', 'Light World'];
    const weaponType = ['All', 'Sword', 'Axe', 'Scarf', 'Ring', 'Other'];
    const source = ['All', 'Shop', 'Malius', 'Forest', 'Castle', 'Cyber', 'Sanctuary', 'Default'];

    return (
        <div className="filters-panel">
            <div className="filter-section">
                <h3>Filtra per capítol:</h3>
                <div className="filter-options">
                    {chapters.map((chapter) => (
                        <button
                            type="button"
                            key={chapter}
                            className={selectedChapter === chapter ? 'active' : ''}
                            onClick={() => setSelectedChapter(chapter)}
                        >
                            {chapter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="filter-section">
                <h3>Filtra per categoria principal:</h3>
                <div className="filter-options">
                    {mainCategory.map((category) => (
                        <button
                            type="button"
                            key={category}
                            className={selectedMainCategory === category ? 'active' : ''}
                            onClick={() => setSelectedMainCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                {selectedMainCategory === 'Weapon' && (
                    <div className="filter-subsection">
                        <h3>Filtra per tipus d'arma:</h3>
                        <div className="filter-options">
                            {weaponType.map((type) => (
                                <button
                                    type="button"
                                    key={type}
                                    className={selectedWeaponType === type ? 'active' : ''}
                                    onClick={() => setSelectedWeaponType(type)}>
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <div className="filter-section">
                <h3>Filtra per llocs:</h3>
                <div className="filter-options">
                    {source.map((src) => (
                        <button
                            type="button"
                            key={src}
                            className={selectedSource === src ? 'active' : ''}
                            onClick={() => setSelectedSource(src)}>
                            {src}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}