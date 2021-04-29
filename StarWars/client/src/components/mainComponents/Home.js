import React, {Component} from 'react';
import starwarsAPI from '../../api';
import People from '../secondaryComponents/people';
import Films from '../secondaryComponents/films';
import Planets from '../secondaryComponents/planets';
import Species from '../secondaryComponents/species';
import Vehicles from '../secondaryComponents/vehicles';
import Starships from '../secondaryComponents/starships';
import Page from '../secondaryComponents/page';
import Auth from '../secondaryComponents/auth';
import Header from '../secondaryComponents/header';
import MainHeader from '../secondaryComponents/mainHeader';

import '../../CSS/style.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = { 
            info: [], 
            idView: false, 
            currentInfo: "", 
            auth: false, log: {user: '', password: ''}, placeholder: "", 
            data: false, json: [],
            infoSearched: [],
            infoFound: false,
            currentAction: "",
            indexUrl: 0,
            tab: ["people", "species", "starships", "vehicles", "planets", "films"],
            i: 0,
            history: [],
            status: false,
            wookieMode: false 
        }
        this.handleGetAllData = this.handleGetAllData.bind(this);
        this.handleGetData = this.handleGetData.bind(this);
        this.handleGetDataById = this.handleGetDataById.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleJson = this.handleJson.bind(this);
        this.handleCompareForSearch = this.handleCompareForSearch.bind(this)
        this.handleVerifySearch = this.handleVerifySearch.bind(this);
        this.backToAuth = this.backToAuth.bind(this);
        this.handleWookieMode = this.handleWookieMode.bind(this);
        this.backToHome = this.backToHome.bind(this);
    }
    
    componentDidUpdate(){
        let status = this.state.status;
        if(status === true && this.state.infoFound === false){
            this.handleVerifySearch();
        }
    }
    
    // Compare un par un les noms des différentes catégories 
    handleVerifySearch(){
        this.state.history.map((data)=>{
            if (data.title === this.state.infoSearched || data.name === this.state.infoSearched){
                // Utilise l'URL pour permettre la récupération ultérieurement
                let str = data.url;
                const words = str.split('/')
                this.setState({
                    currentAction: "catalog",
                    currentInfo: words[4],
                    info: data, 
                    infoFound: true,
                    status: false,
                    indexUrl: words[5] 
                })
            } 
            return data
        })
        
        // console.log(this.state.info)
    }
   
    // Prélève le mot recherché
    handleCompareForSearch(e) {
        let comparation = e.target.value
        this.setState({ 
            infoSearched: comparation 
        })
    }

    // Parcours toutes les données pour trouver le mot correspondant à la recherche
    handleGetAllData(){
    let tab = this.state.tab;
    
    tab.map((data)=>{
        starwarsAPI.getInfo(data)
            .then(json =>
                this.setState({
                    history: json.results,    
                    currentAction: "searching",
                    status: true,
                    data: false,
                    idView: false,
                }) 
                )
                return data 
            })
        }
    

    // EndPoint Schema
    handleJson(url){
        starwarsAPI.getJson(url)
        .then(json => 
            this.setState({
                json: json,  
                data: true
            })
            )
    }

    // Récupère les inputs
    handleChange(event){
            let log = this.state.log;
            log[event.target.name] = event.target.value
            this.setState({
                log: log,
            })
    }

    // Vérifie les inputs 
    handleAuth(){
            let log = this.state.log;
            
            if(log.user === "Luke" && log.password === "DadSucks"){
                this.setState({
                    auth: true
                })
        } else {
            return alert("Failed authentification")
        }
    }

    // Récupère les données pour une catégorie
    handleGetData(url){
        starwarsAPI.getInfo(url)
        .then(json =>
            this.setState({
                info: json.results,
                currentAction: "catalog",
                currentInfo: url,
                data: false,
                infoFound: false,
                idView: false,
                status: false 
            })
        )
    }

    // Récupère les données d'un seul élément
    handleGetDataById(url){
        starwarsAPI.getInfoById(url)
        .then(json=>
            this.setState({
                info:json,
                idView: true
            })
        ) 
    }
           
    backToAuth(){
        this.setState({
            currentAction: "",
            auth:false,
            idView: false, 
            status:false
        })
    }
    backToHome(){
        this.setState({
           currentAction: "",
           infoFound: false,
           status: false,
           idView: false 
        })
    }
    
    handleWookieMode(){
        let wookieMode = this.state.wookieMode
        if(wookieMode === false){
            this.setState({
                wookieMode: true
            })
        } else {
            this.setState({
                wookieMode: false
            })
        }
    }
            render(){
           
                // Initialisation de variables d'état
                let info = this.state.info;

                    // idView est un boolean déterminant la position de l'utilisateur dans le site; 
                    // en effet si il est true, l'utilisateur consulte une fiche d'un élément, sinon il se trouve dans un catalog
                let idView = this.state.idView;
                let auth = this.state.auth;
                let data = this.state.data;

                    //Variables current: ces deux variables déterminent la position de l'utilisateur et le type de donnés
                let currentInfo = this.state.currentInfo;
                let infoFound = this.state.infoFound;
                let status = this.state.status;
                let json = JSON.stringify(this.state.json);
                let content;
                let index = this.state.indexUrl;
                // let wookieMode = this.state.wookieMode; 
                //Accés au site seulement si on est connecté (auth) sinon...

                if(auth === true && data === false){
                    
                    // Permet d'afficher un catalog correspondant à une catégorie 
                    if(idView === false && status === false && infoFound === false){
                        let element;
                        if(this.state.currentAction === "catalog"){
                            element =
                            
                            <div>
                                    <MainHeader
                                        backToAuth={this.backToAuth}
                                        backToHome={this.backToHome}
                                        onCompareForSearch={this.handleCompareForSearch}
                                        handleGetAllData={this.handleGetAllData}
                                        />
                                    <Page
                                        index={index}
                                        infoFound={infoFound}
                                        onGetDataById={this.handleGetDataById}
                                        info={info}
                                        currentInfo={currentInfo}
                                        backToAuth={this.backToAuth}
                                        backToHome={this.backToHome}
                                        // wookieMode={wookieMode}
                                    />
                                </div>
                        } else {
                            element = 
                            <Header
                            handleGetData={this.handleGetData}
                            handleGetAllData={this.handleGetAllData}
                            handleJson={this.handleJson}
                            backToAuth={this.backToAuth}
                            onCompareForSearch={this.handleCompareForSearch}
                            // onWookieMode={this.handleWookieMode}
                            />
                        }
                        content =
                        <div>
                                {element}
                        </div>
                    } 
                    // Permet de rechercher une information dans un catalog  
                    else if (idView === false && infoFound === true){
                        console.log("passed")
                        content =
                        <div>
                                <MainHeader
                                    onCompareForSearch={this.handleCompareForSearch}
                                    handleGetAllData={this.handleGetAllData}
                                    backToAuth={this.backToAuth}
                                    backToHome={this.backToHome}
                                />
                                <Page
                                    index={index}
                                    infoFound={infoFound}
                                    onGetDataById={this.handleGetDataById}
                                    info={info}
                                    currentInfo={currentInfo}
                                    // wookieMode={wookieMode}
                                />
                            </div> 
                    } 
                    
                    // Permet de consulter une fiche d'un élément précis (en fonction de son index)
                    else if(idView===true){
                        const header = 
                        <MainHeader
                            onCompareForSearch={this.handleCompareForSearch}
                            handleGetAllData={this.handleGetAllData}
                            backToAuth={this.backToAuth}
                            backToHome={this.backToHome}
                        />
                        switch(currentInfo){
                            case "people": 
                            content =
                            <div>
                                {header}
                                <People
                                info={info}
                                /> 
                            </div>
                            break;
                            case "films": content =
                            <div>
                                {header}
                                <Films
                                info={info}
                                />
                            </div>
                            break;
                            case "planets": content =
                                <div>
                                    {header}
                                    <Planets
                                        info={info}
                                    />
                                </div>
                            break;
                            case "species": content =
                                <div>
                                    {header}
                                    <Species
                                        info={info}
                                    />
                                </div>
                            break;
                            case "starships": content =
                                <div>
                                    {header}
                                    <Starships
                                        info={info}
                                    />
                                </div>
                            break;
                            case "vehicles": content =
                                <div>
                                    {header}
                                    <Vehicles
                                        info={info}
                                    />
                                </div>
                            break;
                            default: content = "Hello there";   
                        } 
                    }
                } 
                
                else if(auth === false && data === false){
                    content =   
                    <Auth
                    onChangeInput={this.handleChange}
                    onAuth={this.handleAuth}
                    /> 
                } 
                
                else { 
                    content = 
                        <div>
                            <p id="white">
                                {json}
                            </p>
                        </div>   
                }
                
                return(
                    <div>
                        
            
                        <div id="container">
                            {content} 
                        </div> 
                    </div>
        )
    }
}
export default Home;