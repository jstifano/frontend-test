/****************************************************************
* Componente  :: ButtonTrash (Dumb Component)                   *
*                                                               *
* Descripción :: Botón del spam de la bandeja de entrada        *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React from 'react'
import FaBug from 'react-icons/lib/fa/bug'

const SpamButton = (props) => {
	return (
		<div>
			<FaBug 
				width={props.width}
				height={props.height}
			>
			</FaBug>
		</div>
	)
}

export default SpamButton