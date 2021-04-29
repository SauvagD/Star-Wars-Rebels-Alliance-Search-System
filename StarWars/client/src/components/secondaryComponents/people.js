import style from '../../CSS/sheet.module.css';
const People = props => {
    return(
        <div id={style.sheetContainer}>
            <h1>{props.info.name}</h1>
            <h2>Birthday</h2>
            <p>{props.info.birth_year}</p>
            <h2>Body</h2>
            <h3>Height :</h3>
            <p>{props.info.height}</p>
            <h3>Mass :</h3>
            <p>{props.info.mass}</p>
            <h3>Skin, Hair and Eyes, color : </h3>
            <p>{props.info.skin_color}</p>
            <p>{props.info.hair_color}</p>
            <p>{props.info.eye_color}</p>
            <h3>Gender :</h3>
            <p>{props.info.gender}</p>
        </div>
    )
} 
export default People;