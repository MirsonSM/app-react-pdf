import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data';
import { Impressao } from './impressao';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const visualizarImpressao = () => { 
  const classeImpressao = new Impressao(data);
  const documento = classeImpressao.GerarDocumento(); 
  pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Criando documentos PDF com ReactJS
        </p>        
      </header>
      <section className="App-body">
        <button className="btn" onClick={visualizarImpressao}>
          Visualizar documento
        </button>
      </section>
    </div>
  );

}

export default App;