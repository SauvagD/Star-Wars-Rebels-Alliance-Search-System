import style from '../../CSS/sheet.module.css';

const Films = props => {
    return (
        <div id={style.sheetContainer}>
            <h1>{props.info.title}</h1>
            <h2>Episode: {props.info.episode_id}</h2>
            <p>{props.info.opening_crawl}</p>
            <h2>Director and Producer</h2>
            <p>{props.info.director}, {props.info.producer}</p>
            <h2>Release Date</h2>
            <p>{props.info.release_date}</p>
        </div>
    )
}
export default Films;