import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux' // Store para la data del App.

// Componentes utilizados
import MainContainer from '../main_container/containers/main_container'
import data from '../mail-data.json'

const initialState = data; // Guardo info inicial en el store

// Creo el store de Redux
const store = createStore(
	() => {},
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

render(<MainContainer data={data}/>, App);

