/*******************************************************
* Componente :: App Container (Smart Component)        *
*                                                      *
* Descripción :: Componente padre de toda la App       *
* @author     :: Javier Stifano <jstifano18@gmail.com> *
********************************************************/

import React from 'react'
import { render } from 'react-dom'

// Componentes utilizados
import MainContainer from '../main_container/containers/main_container'
import apiJSON from '../mail-data.json'

// Redux 
import { createStore } from 'redux' // Store para la data del App.
import { Provider } from 'react-redux' // Decorador para extender las propiedas a los componentes hijos
import reducer from '../reducers/data' 

// Guardo info inicial en el store
const initialState = {
	data: {
		...apiJSON, 
	}
}

// Creo el store de Redux
const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // Dev tool de Redux
)

render(
	<Provider store={store}>
		<MainContainer/>
	</Provider>
, App);

