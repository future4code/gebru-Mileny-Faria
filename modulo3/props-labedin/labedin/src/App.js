import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem='https://lh3.googleusercontent.com/EVlo4jVHpvWEZV2mdUCxKlUlczOmSo8UUzdpFNOI6WFiaw-c3bWPWeZiKp0EONcZ5zscJmDL_uQMuUOSNZ4MLJ0BomSLI9HjPHitsrpGiVnKctTwMyEWeHgaerpYdIIV6-I3YE25xLbhGv7oFf7cj1aPXPI6LV6WNE--WWegFqdGi9zLfuz_XwD_xwjbNbcoSIFuHYnrnVAdAsbUIgAT61JFlL_O7Aoory-Cy7Cq3tN6V0faw-IO95XWtmyay7O3BlD0IgDP7llgAjan8lOgpn9gZ72VJHIFVjQBdEqMagpNN2lXxdesh0G6gww_-LBaLjgO1Phvau1RoXx-svkmMQNntNjeHTSivYuC3OXcyOG7lcmYKMdQRV0ZXB9HNCHrgbjWeBCZ1L1w5vXU7S8tIROtZW4fhzEo4rtBNueej4k8VrXb53skbxh41AHORdcKRDCsDw5Y-f7nSdIcuRNqdGZK4S3XgeboOwBmIW3Am7pRHT7-pM3f1HMkyGoBZ2GYH0DGeDuLjMcL8ZyZpbVGVoETD3GTwb3I7VfMjqkAY3EtVajiZCijVVdiSKYsfekvzcWgtv3UcxpVk3dAeCnHCdXyTHjPtWWIdCSe-CLsw5qTOMj4KgCsA8DkRGMIlLt0K4BCSqVO4SposS9b5Dl6QSDu-jaUfbC5PzIkKIJx9MQmVgxd0OChuKXA2XmvrnO4w5EVRwWjMAAwHTtb-8FfJD5J=w352-h625-no?authuser=0'
          nome="Mileny Resende de Faria" 
          descricao="Oi, eu sou a Mileny. Sou estudante da Labenu. Estou me especializando em Web Full Stack e no momento estou aprendendo o Front End, mais especificamente a trabalhar com o React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg" 
          texto="Email: myrfaria@gmail.com"
        />

        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/17/17589.png" 
          texto="Endereço: Rua em Franca"
        />
      
      </div>  

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.calcarbem.com.br/imagem-banner/1469186189.jpg" 
          nome="Calçar Bem" 
          descricao="Todo o setor Administrativo, Faturamento, Financeiro, Planejamento, Compras e Comercial" 
        />
        
        <CardGrande 
          imagem="https://turmadopezinho.loja2.com.br/img/287ac7f9f7cde37b472ecffb63f1db91.jpg" 
          nome="Turma do Pezinho" 
          descricao="Todo o setor Administrativo, Faturamento, Financeiro, Planejamento, Compras e Comercial" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
