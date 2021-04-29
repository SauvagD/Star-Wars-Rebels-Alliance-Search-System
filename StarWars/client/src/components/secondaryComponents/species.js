import style from '../../CSS/sheet.module.css';

const Species = props => {
    return (
        <div>

        <div id={style.sheetContainer}>
            <h1>{props.info.name} :</h1>
            <h2>Classification :</h2>
            <p>{props.info.classification}</p>
                <h2>Designation :</h2>
            <p>{props.info.designation}</p>
                <h2>Average Height, Lifespan :</h2>
            <p>{props.info.average_height}</p>
            <p>{props.info.average_lifespan}</p>
                <h2>Skin, Hair, Eye color :</h2>
            <p>{props.info.skin_colors}</p>
            <p>{props.info.hair_colors}</p>
            <p>{props.info.eye_colors}</p>
                <h2>Language :</h2>
            <p>{props.info.language}</p>
        </div>
        </div>
    )
}
export default Species;