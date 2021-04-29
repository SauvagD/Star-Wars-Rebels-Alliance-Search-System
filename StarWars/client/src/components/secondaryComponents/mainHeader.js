import style from '../../CSS/page.module.css';
import logo from '../../images/loupe.png';
const MainHeader = props => {

    return(
        <>
            <header id={style.header}>
                <nav id={style.navMainHeader}>
                    <div id={style.searchDiv}>
                        <button
                            id={style.headerButton}
                            onClick={()=>props.backToAuth()}
                            >GoToAuth
                        </button>
                        <button id={style.headerButton}
                        onClick={()=>props.backToHome()}
                        >Home
                        </button>
                    </div>
                    <input
                        placeholder="Search by name"
                        id={style.headerInput}
                        type="search"
                        onChange={(e)=> props.onCompareForSearch(e)}
                    />
                    <button
                        onClick={() => props.handleGetAllData()}
                        id={style.searchButton}
                    >             
                    <img
                        src={logo}
                        alt= 'loupe'
                        id={style.logo}
                    ></img> 
                    </button>
                </nav>
            </header>
        </>
    )
}
export default MainHeader;