import './Card.css'

export function ItemsCard({deltaItem}) {
    return (
        <div className="card">

            <h1>{deltaItem.Name}</h1>
            <h2 >{deltaItem.Chapter}</h2>
            <h3>{deltaItem.Category}</h3>
            <p>{deltaItem.Description}</p>
            
            <div className="card-stats">
                <p>{deltaItem.Effects}</p>
                <p>{deltaItem.Buy}</p>
            </div>
            
            <p>{deltaItem.Source}</p>
            <img src={deltaItem.Image} alt={deltaItem.Name} />

        </div>
    )
}



