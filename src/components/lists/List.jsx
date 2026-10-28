import { ItemsCard } from './Card.jsx'
import './List.css'

export function ListItems({ title = "Unnamed", deltaItems }) {
    return (
        <div className="list">
            <h2>{title}</h2>
            <ul>
                {deltaItems.map(item => {
                    return (
                        <li key={item.id}>
                            <ItemsCard deltaItem={item}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}