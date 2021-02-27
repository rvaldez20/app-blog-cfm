import React from 'react';
import{BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import AcercaDe from './components/AcercaDe';

const App = () => {



  return ( 

	<BrowserRouter>
	
		<div>
			{/* Componente Header */}			
			<Header />

			<main>
			
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

			</main>
		</div>  

	</BrowserRouter>

  );
}
 
export default App;