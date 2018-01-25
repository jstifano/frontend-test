/***************************************************************
* Componente :: Inbox Layout (Dumb Component)                  *
*                                                              *
* Descripción :: Layout del inbox ubicado en el menu izquierdo *
* @author     :: Javier Stifano <jstifano18@gmail.com>         *
****************************************************************/

import React from 'react'
import ButtonsContainer from '../../buttons_inbox/containers/buttons_container'
import '../../partials/_inbox.sass'

const InboxLayout = (props) => {
	return (
		<div className="inbox-container">
			<ButtonsContainer data={props.data} handleReaded={props.handleReaded}/>
		</div>
	)
}

export default InboxLayout