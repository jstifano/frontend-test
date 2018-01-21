/****************************************************************
* Componente :: InboxButton (Dumb Component)                    *
*                                                               *
* Descripción :: Botón de la bandeja de entrada                 *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React from 'react'
import FaInbox from 'react-icons/lib/fa/inbox'

const InboxButton = (props) => {
	return (
		<FaInbox 
			width={15}
			height={15}
		>
		</FaInbox>
	)
}

export default InboxButton