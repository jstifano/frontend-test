/****************************************************************
* Componente  :: ButtonTrash (Dumb Component)                   *
*                                                               *
* Descripción :: Botón del spam de la bandeja de entrada        *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React from 'react'
import FaListAlt from 'react-icons/lib/fa/list-alt'

const SpamButton = (props) => {
	return (
		<FaListAlt 
			width={props.width}
			height={props.height}
		>
		</FaListAlt>
	)
}

export default SpamButton