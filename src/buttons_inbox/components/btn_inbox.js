/****************************************************************
* Componente :: InboxButtonLayout (Dumb Component)              *
*                                                               *
* Descripción :: Botón de la bandeja de entrada                 *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React from 'react'
import FaInbox from 'react-icons/lib/fa/inbox'

const InboxButton = (props) => {
	return (
		<div>	
			<FaInbox 
				width={props.width}
				height={props.height}
			>
			</FaInbox>
		</div>
	)
}

export default InboxButton