import style from '../../CSS/page.module.css';

const Page = props => {
    let element = [];
    let suffixe =  "";
    // if(props.wookieMode === true){
    //     suffixe = "/?format=wookiee";
    // }

if(props.infoFound === true){
    element =
        <div id={style.sheetDiv} >
            <h1 id={style.name}>{props.info.name} {props.info.title}</h1>
            <button
                id={style.sheetButton}
                onClick={() => props.onGetDataById(`${props.currentInfo}/${props.index}${suffixe}`)}
            >Click
                            </button>
        </div>
       
} else {
   element =
 
       Object.keys(props.info).map((data, index) =>{
           let url = props.info[data].url;
           let words = url.split('/'); 
           return (
               <div id={style.sheetDiv}>
                   <h1 id={style.name}>{props.info[data].name} {props.info[data].title}</h1>
                   <button
                        id={style.sheetButton}
                        onClick={() => props.onGetDataById(`${props.currentInfo}/${words[5]}${suffixe}`)}
                   >Click
            </button>
               </div>
           )
       })
      
}
    return (
        <div>
            
            <div id={style.lol}>
            {element}
            </div>
        </div>
    )
}
export default Page;