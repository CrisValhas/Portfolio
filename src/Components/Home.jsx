import "./Styles/home.css";
import profile from "../Media/Profile.jpg";
import Astronet from "../Media/astroNet.png";
import PI from "../Media/PI.png";

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
                        <div className="tile">
                        <a href="https://github.com/vlmnst/AstroNet" ><h3>React Native Astronet</h3></a>
                            <div className="text">
                                <img src={Astronet} />
                                <h1>AstroNet</h1>
                                <h2 className="animate-text">Bootcamp Henry 2022</h2>
                                <p className="animate-text">proyecto realizado con un equipo de 8 personas para presentar en el examen final utilizando react native, mongoDb, redux toolkits y muchas muchas ganas</p>
                            </div>
                        </div>

                        <div className="tile">
                            <a href="https://github.com/CrisValhas/PI" ><h3>React SPA Videogames</h3></a>
                            <div className="text">
                                <img src={PI} />
                                <h1>Videogames app</h1>
                                <h2 className="animate-text">Bootcamp Henry 2022</h2>
                                <p className="animate-text">Es una apptipo SPA que utiliza react , redux, sequalize postgree y express junto con una api de informacion con mas de 500mil juegos a dispocicion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}