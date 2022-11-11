// TODO: create a component that displays a single bakery item
export default function bakeryItem(item) {
    return (
        <div>
        <h3> {item.name} </h3>
        <img className="BakeryImage"src={item.image}></img>
        <p>{item.description} $ {item.price}</p>
        
        </div>
    )
}
