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
			<ButtonsContainer 
				emails={props.emails}
				search={props.search}
				handleReaded={props.handleReaded}
				handleInboxMessages={props.handleInboxMessages}
				handleErasedMessages={props.handleErasedMessages}
				handleSpamMessages={props.handleSpamMessages}
			/>
		</div>
	)
}

export default InboxLayout