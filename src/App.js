import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import AcercaDe from './components/AcercaDe';
import Post from './components/Post';
import Error404 from './components/Error404';

const App = () => {
  return ( 
	<BrowserRouter>
	
		<ContenedorPrincipal>
			{/* Componente Header */}			
			<Header />

			<Main>		
				<Switch>
					{/* cuando es de una linea se puede hacer asi)*/}	
					<Route path="/" exact={true} component={Inicio} />				

					<Route path="/blog" component={Blog} />
					<Route path="/post/:id" component={Post} />			
					<Route path="/acerca-de" component={AcercaDe} />
					<Route component={Error404} />

					{/* O s epuede dejar de varia lineas */}	
					{/*
					<Route path="/acerca-de">
						<AcercaDe />     
					</Route>
					*/}				
				</Switch>	
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