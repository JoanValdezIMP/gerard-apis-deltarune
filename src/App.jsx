import { useState } from 'react'
import { Footer } from './components/layout/Footer.jsx'
import { Header } from './components/layout/Header.jsx'

import { ListItems } from './components/lists/List.jsx'
import { deltaData } from './components/data/Data.jsx' 
import { FilterButtons } from './components/FilterButtons.jsx'

function filterItems(deltaData, chapters, mainCategory, weaponType, source) {
  return 
}


function App() {
  const [selectedChapter, setSelectedChapter] = useState('Tots');
  const [selectedMainCategory, setSelectedMainCategory] = useState('Totes');
  const [selectedWeaponType, setSelectedWeaponType] = useState('Totes');
  const [selectedSource, setSelectedSource] = useState('Totes');

  const filteredItems = filterItems(deltaData, selectedChapter, selectedMainCategory, selectedWeaponType, selectedSource);

  return (
    <div>
      <Header />

      <FilterButtons 
        selectedChapter={selectedChapter}
        setSelectedChapter={setSelectedChapter}
        selectedMainCategory={selectedMainCategory}
        setSelectedMainCategory={setSelectedMainCategory}
        selectedWeaponType={selectedWeaponType}
        setSelectedWeaponType={setSelectedWeaponType}
        selectedSource={selectedSource}
        setSelectedSource={setSelectedSource}
      />

      <p>Hola</p>
      <ListItems title="Deltarune" deltaItems={filteredItems} />


      <Footer />

    </div>
  )
}

export default App
