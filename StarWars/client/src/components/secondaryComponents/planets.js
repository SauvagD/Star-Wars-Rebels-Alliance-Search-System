import style from '../../CSS/sheet.module.css';

const Planets = props => {
    return (
        <div id={style.sheetContainer}>
            <h1>{props.info.name}</h1>
            <h2>Rotation and Orbital period</h2>
            <h3>Rotation :</h3>
            <p>{props.info.rotation_period}</p>
            <h3>Orbital :</h3>
            <p>{props.info.orbital_period}</p>
            <h2>Earth parameters</h2>
            <h3>Diameter :</h3>
            <p>{props.info.diameter}</p>
            <h3>Climate : </h3>
            <p>{props.info.climate}</p>
            <h3>Gravity :</h3>
            <p>{props.info.gravity}</p>
            <h3>Terrain :</h3>
            <p>{props.info.terrain}</p>
            <h3>Surface water :</h3>
            <p>{props.info.surface_water}</p>
            <h2>Population :</h2>
            <p>{props.info.population}</p>
        </div>
    )
}
export default Planets;