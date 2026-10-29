import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer.jsx'
import { Header } from './components/layout/Header.jsx'

import { ListItems } from './components/lists/List.jsx'
import { FilterButtons } from './components/FilterButtons.jsx'

function getCookies(name) {
  const cookies = document.cookie.split('; ');
  const cookie = cookies.find((item) => item.startsWith(name + '='));

  if (!cookie) return null;

  return decodeURIComponent(cookie.substring(name.length + 1));
}

function setCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=10000; SameSite=Lax`;
}

function filterItems(items, chapters, mainCategory, weaponType, source) {
  return items.filter((item) => {
    const matchChapter = chapters === 'All' || item.Chapter === chapters;
    const matchMainCategory =
      mainCategory === 'All' ||
      (mainCategory === 'Weapon'
        ? item.Category.startsWith('Weapon-')
        : item.Category === mainCategory);
    const matchWeaponType =
      mainCategory !== 'Weapon' ||
      weaponType === 'All' ||
      item.Category === `Weapon-${weaponType}`;
    const itemSources = Array.isArray(item.Source)
      ? item.Source
      : item.Source.split(',').map((itemSource) => itemSource.trim());
    const matchSource =
      source === 'All' ||
      itemSources.some((itemSource) =>
        itemSource.toLowerCase().includes(source.toLowerCase())
      );

    return matchChapter && matchMainCategory && matchWeaponType && matchSource;
  });
}


function App() {
  const [deltaData, setDeltaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [selectedChapter, setSelectedChapter] = useState(() => getCookies('chapter') || 'All');
  const [selectedMainCategory, setSelectedMainCategory] = useState(() => getCookies('mainCategory') || 'All');
  const [selectedWeaponType, setSelectedWeaponType] = useState(() => getCookies('weaponType') || 'All');
  const [selectedSource, setSelectedSource] = useState(() => getCookies('source') || 'All');

  useEffect(() => {
    async function loadItems() {
      try {
        const response = await fetch('https://dummyjson.com/c/4b8a-e2f2-4895-9df0');

        if (!response.ok) {
          throw new Error('Error carregant els objectes');
        }

        const data = await response.json();
        setDeltaData(data);
      } catch (err) {
        console.error(err);
        setError("No s'han pogut carregar els objectes");
      } finally {
        setLoading(false);
      }
    }

    loadItems();
  }, []);

  useEffect(() => {
    setCookie('chapter', selectedChapter);
  }, [selectedChapter]);

  useEffect(() => {
    setCookie('mainCategory', selectedMainCategory);
  }, [selectedMainCategory]);

  useEffect(() => {
    setCookie('weaponType', selectedWeaponType);
  }, [selectedWeaponType]);

  useEffect(() => {
    setCookie('source', selectedSource);
  }, [selectedSource]);

  useEffect(() => {
    const isSwordSelected = selectedMainCategory === 'Weapon' && selectedWeaponType === 'Sword';
    const isAxeSelected = selectedMainCategory === 'Weapon' && selectedWeaponType === 'Axe';
    const isScarfSelected = selectedMainCategory === 'Weapon' && selectedWeaponType === 'Scarf';
    const isRingSelected = selectedMainCategory === 'Weapon' && selectedWeaponType === 'Ring';
    const isOtherSelected = selectedMainCategory === 'Weapon' && selectedWeaponType === 'Other';
    document.body.classList.toggle('sword-background', isSwordSelected);
    document.body.classList.toggle('axe-background', isAxeSelected);
    document.body.classList.toggle('scarf-background', isScarfSelected);
    document.body.classList.toggle('ring-background', isRingSelected);
    document.body.classList.toggle('other-background', isOtherSelected);

    return () => {
      document.body.classList.remove('sword-background');
      document.body.classList.remove('axe-background');
      document.body.classList.remove('scarf-background');
      document.body.classList.remove('ring-background');
      document.body.classList.remove('other-background');
    };
  }, [selectedMainCategory, selectedWeaponType]);

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

      {loading && <p>Carregant objectes...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <ListItems title="Deltarune" deltaItems={filteredItems} />}

      <Footer />

    </div>
  )
}

export default App
