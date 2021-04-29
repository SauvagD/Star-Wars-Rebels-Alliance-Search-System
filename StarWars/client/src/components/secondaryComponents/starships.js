import style from '../../CSS/sheet.module.css';

const Starships = props => {
    return (
        <div id={style.sheetContainer}>
            <h1>{props.info.name}</h1>
            <h2>Description</h2>
            <h3>Model : {props.info.model}</h3>
            <h3>Class : {props.info.starship_class}</h3>
            <h3>Manufacturer : {props.info.manufacturer}</h3>
            <h2>Stats</h2>
            <h3>Cost : {props.info.cost_in_credits}</h3>
            <h3>Lenght : {props.info.length}</h3>
            <h3>Max atmosphering speed : {props.info.max_atmosphering_speed}</h3>
            <h3>Hyperdrive rating : {props.info.hyperdrive_rating}</h3>
            <h3>MGLT : {props.info.MGLT}</h3>
            <h3>Crew : {props.info.crew}</h3>
            <h3>Passengers : {props.info.passengers}</h3>
            <h3>Cargo capacity : {props.info.cargo_capacity}</h3>
            <h3>Consumables : {props.info.consumables}</h3>
        </div>
    )
}
export default Starships;
