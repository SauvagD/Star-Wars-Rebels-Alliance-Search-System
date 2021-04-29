import style from '../../CSS/header.module.css';
import logo from '../../images/loupe.png';

const Header = props =>{
    return(
        <div id={style.container}>
            <h1 id={style.title}>Star Wars</h1>
            <div id={style.searchDiv}>
                <input 
                id={style.searchInput} 
                placeholder="Search by name ... (Luke Skywalker)" 
                type="search" 
                onChange={(e) => props.onCompareForSearch(e)} 
                />

                <button 
                id={style.searchButton} 
                onClick={() => props.handleGetAllData()}
                >
                <img 
                src={logo}
                alt="loupe"
                id={style.logo} 
                ></img>
                </button>
            </div>
            <nav>
                <br></br>
                <div id={style.categoryDiv}>
                <button id={style.buttonCategory} onClick={() => props.handleGetData("people")}>Characters</button>
                    <button id={style.buttonCategory} onClick={() => props.handleJson("people/schema")}>Characters (JSON)</button>
                </div>
                <div id={style.categoryDiv}>
                    <button id={style.buttonCategory} onClick={() => props.handleGetData("films")}>Films</button>
                    <button id={style.buttonCategory} onClick={() => props.handleJson("films/schema")}>Films (JSON)</button>
                </div >
                <div id={style.categoryDiv}>
                    <button id={style.buttonCategory} onClick={() => props.handleGetData("planets")}>Planets</button>
                    <button id={style.buttonCategory} onClick={() => props.handleJson("planets/schema")}>Planets (JSON)</button>
                </div>
                <div id={style.categoryDiv}>
                    <button id={style.buttonCategory} onClick={() => props.handleGetData("species")}>Species</button>
                    <button id={style.buttonCategory} onClick={() => props.handleJson("species/schema")}>Species (JSON)</button>
                </div>
                <div id={style.categoryDiv}>
                    <button id={style.buttonCategory} onClick={() => props.handleGetData("starships")}>Starships</button>
                    <button id={style.buttonCategory} onClick={() => props.handleJson("starships/schema")}>Starships (JSON)</button>
                </div>
                <div id={style.categoryDiv}>
                    <button id={style.buttonCategory} onClick={() => props.handleGetData("vehicles")}>Vehicles</button>
                    <button id={style.buttonCategory}onClick={() => props.handleJson("vehicles/schema")}>Vehicles (JSON)</button>
                </div>
            </nav>
            <button
            id={style.buttonAuth} 
            onClick={()=> props.backToAuth()}
            >Go back to Auth
            </button>
            {/* <button onClick={()=> props.onWookieMode()}>Wookie Mode</button> */}
        </div>
    )
}
export default Header;