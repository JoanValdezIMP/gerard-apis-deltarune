import { ItemsCard } from './Card.jsx'
import './List.css'

export function ListItems({ title = "Unnamed", deltaItems }) {
    return (
        <div className="list">
            <h2>{title}</h2>
            {deltaItems.length > 0 ? (
                <ul>
                    {deltaItems.map(item => (
                        <li key={item.id}>
                            <ItemsCard deltaItem={item}/>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="list-empty-state">
                    <img
                        src="https://media.tenor.com/76R1rBHApAYAAAAM/deltarune-toby-fox.gif"
                        alt="Toby Fox de Deltarune"
                    />
                    <p>No s'han trobat objectes amb aquests filtres.</p>
                </div>
            )}
        </div>
    );
}