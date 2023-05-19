const Card = ({id,name,email}) => {
    console.log("hey")
    return (
        <div className="bg-light-green dib ma2 pa3 br3 grow">
            <img src={`https://robohash.org/${id}.png`} alt={name}/>
            <div>
                <h2>{name}</h2>
                <h2>{email}</h2>
            </div>
        </div>

    )
}
export default Card;