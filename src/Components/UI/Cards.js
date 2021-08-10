import './Cards.css';

const Cards=(props)=>{

    const card='cards ' + props.className;

    return <div className={card}>{props.children}</div>
}

export default Cards;