/****************************************************************
* Componente  :: ButtonTrash (Dumb Component)                   *
*                                                               *
* Descripción :: Botón de la basura para eliminar correos       *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React from 'react'
import FaTrashO from 'react-icons/lib/fa/trash-o'

const TrashButton = (props) => {
	return (
		<div>
			<FaTrashO 
				width={props.width}
				height={props.height}
			>
			</FaTrashO>
		</div>
	)
}

export default TrashButton