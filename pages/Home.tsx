import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconiImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

function Home(){
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração LetMeAsk"/>
                <strong>Crie salas de Perguntas e Respostas ao vivo</strong>
                <p>Tire as dúvidas da sua audição em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="logo do Letmeask" />
                    <button>
                        <img src={googleIconiImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form action="">
                        <input 
                        type="text" 
                        name="" 
                        placeholder="Digite o código da sala"
                        />
                        <button type="submit">Entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
export default Home;

