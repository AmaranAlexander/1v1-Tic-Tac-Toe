function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null;
    if (value == null && playerTurn != null) {
        if (playerTurn % 2 === 0) {
            hoverClass = 'o-hover'
        } else{
            hoverClass = 'x-hover'
        }
    }
    return ( 
        <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>{value}</div>
    );
}

export default Tile;
