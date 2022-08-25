import "./Styles/home.css";
import profile from "../Media/Profile.jpg";
import Astronet from "../Media/astroNet.png";
import PI from "../Media/PI.png";
import PuntayHacha from "../Media/PuntayHacha.png";

export default function Home() {


    return (
        <div className="Container">
            <div className="wrap">
                {/* PROFILE */}
                <div className="profile">
                    <div className="container">
                        <div className="avatar">
                            <a>
                                <img className="picProfile" src={profile} alt="profile" />
                            </a>
                        </div>
                        <div className="content">
                            <h1>Developer Full Stack</h1>
                            <a href="mailto:cristianrubiles@gmail.com"><h3 className="mail">cristianrubiles@gmail.com</h3></a>
                        </div>
                        <div className="devbox">
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
                            <img className="devico" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain-wordmark.svg" />
                        </div>
                    </div>
                    <div className="textProfile">
                        Hello and welcome! I'm Cristian Valtelhas, a young software developer living in Argentina near Buenos Aires.
                        This is my personal website and portfolio: here you will find my projects and something about myself.
                        Most of my work is open source. I hope you find something useful. Enjoy your stay!
                    </div>
                    <div className="proyects">


                        <a href="https://github.com/vlmnst/AstroNet" >
                            <div className="tile">
                                <h3>React Native Astronet</h3>
                                <div className="text">
                                    <img src={Astronet} />
                                    <h1>AstroNet</h1>
                                    <h2 className="animate-text">Bootcamp Henry 2022</h2>
                                    <p className="animate-text">proyecto realizado con un equipo de 8 personas para presentar en el examen final utilizando react native, mongoDb, redux toolkits y muchas muchas ganas</p>
                                </div>
                            </div>
                        </a>
                        <a className="link" href="https://drive.google.com/file/d/1ojL_9teHOS5y0_d2DSFkLmtrz8mMn2pK/view?usp=sharing">Download Astronet Android Apk</a>
                        
                        
                        <a href="https://github.com/CrisValhas/PI" >
                            <div className="tile">
                                <h3>React SPA Videogames</h3>
                                <div className="text">
                                    <img src={PI} />
                                    <h1>Videogames app</h1>
                                    <h2 className="animate-text">Bootcamp Henry 2022</h2>
                                    <p className="animate-text">Es una apptipo SPA que utiliza react , redux, sequalize postgree y express junto con una api de informacion con mas de 500mil juegos a dispocicion</p>
                                </div>
                            </div>
                        </a>
                        <a className="link" href="https://videogamesapp-mauve.vercel.app/">Visit videogames website</a>


                        <a href="https://github.com/CrisValhas/puntayhacha" >
                            <div className="tile">
                                <h3>React App</h3>
                                <div className="text">
                                    <img className="img" src={PuntayHacha} />
                                    <h1>Punta y Hacha</h1>
                                    <h2 className="animate-text">agosto 2022</h2>
                                    <p className="animate-text">Pagina de contacto de la chacra Punta y Hacha, Con opción de idioma ingles/español, responsive y en css puro  </p>
                                </div>
                            </div>
                        </a>
                        <a className="link" href="https://puntayhacha.com.ar/">Visit website</a>
                    </div>
                </div>
            </div>
        </div >
    );
}