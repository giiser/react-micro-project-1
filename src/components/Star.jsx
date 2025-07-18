const Star = ({star, rating, hover, color, ratingClick, mouseEnter, mouseLeave}) => {
    return (
        <span
            onClick={() => ratingClick(star)}
            onMouseEnter={() => mouseEnter(star)}
            onMouseLeave={() => mouseLeave(null)}
            className={'star'}
            style={{color: star<=(hover||rating)?color:'#ccc'}}
        >
        {'\u2605'}
        </span>
    );
}

export default Star;