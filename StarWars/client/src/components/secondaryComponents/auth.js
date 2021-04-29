import style from '../../CSS/auth.module.css'

const Auth = props =>{

    return(
        <div>

        <div id={style.container}>
            <h1 id={style.title}>Star Wars</h1>
            <link href="https://fr.allfont.net/allfont.css?fonts=star-jedi" rel="stylesheet" type="text/css" />
            <h2>Authentification</h2>
            <input id={style.authInputUser} placeholder="Leia" name="user" onChange={(e) => props.onChangeInput(e)} required />
            <input id={style.authInputPassword} placeholder="Dad is the Best" name="password" onChange={(e) => props.onChangeInput(e)} required />
            <button id={style.loginButton} onClick={() => props.onAuth()}>Login</button>
        </div>
        </div>
    )
}
export default Auth