import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import AcercaDe from './components/AcercaDe';

const App = () => {
  return ( 
	<BrowserRouter>
	
		<ContenedorPrincipal>
			{/* Componente Header */}			
			<Header />

			<Main>			
				{/* cuando es de una linea se puede hacer asi)*/}	
				<Route path="/" exact={true} component={Inicio} />				
				<Route path="/blog" component={Blog} />
				<Route path="/acerca-de" component={AcercaDe} />

				{/* O s epuede dejar de varia lineas */}	
				{/*
				<Route path="/acerca-de">
					<AcercaDe />     
				</Route>
				*/}
			</Main>
		</ContenedorPrincipal>  

	</BrowserRouter>

  );
}

// se define los stylos para este componente con styled.components
const ContenedorPrincipal = styled.div`
	padding: 40px;
	width: 90%;
	max-width: 700px;
`;

const Main = styled.main`
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(129, 129, 129, 0.1);
`;

 
export default App;