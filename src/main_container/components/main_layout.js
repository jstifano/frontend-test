/*******************************************************
* Componente :: MainContainer                          *
*                                                      *
* Descripción :: Wrapper principal para el mailbox     *
* @author     :: Javier Stifano <jstifano18@gmail.com> *
********************************************************/
import React from 'react'
import './main_layout.css'

const MainLayout = (props) => {
	return (
		<div className="container">
			{props.children}
		</div>
	)
}

export default MainLayout