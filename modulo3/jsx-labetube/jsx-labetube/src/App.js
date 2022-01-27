import './App.css';
import home from "./imgs/home.png"
import explorar from "./imgs/explorar.png"
import biblioteca from "./imgs/biblioteca.png"
import inscricoes from "./imgs/inscricoes.png"
import lupa from "./imgs/lupa.png"


function App() {
  
  const titulo = "Título do vídeo"
  
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  
  return (
    <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Pesquisar" id="campoDeBusca"/>
            <button type="button"><img src= {lupa} alt="icone de lupa"/></button>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="icones-menu-vertical"><img src= {home} alt="icone de pagina inicial"/></li>
                    <li className="botoes-menu-vertical">Início</li>
                    
                    <li className="icones-menu-vertical"><img src= {explorar} alt="icone de explorar"/></li>
                    <li className="botoes-menu-vertical">Explorar</li>

                    <li className="icones-menu-vertical"><img src= {inscricoes} alt="icone de inscricoes"/></li>
                    <li className="botoes-menu-vertical">Inscrições</li>
                    
                    <li className="icones-menu-vertical"><img src= {biblioteca} alt="icone biblioteca"/></li>
                    <li className="botoes-menu-vertical">Biblioteca</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
  );
}

export default App;
