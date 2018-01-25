/*******************************************************
* Componente :: Email Detail (Dumb Component)          *
*                                                      *
* Descripción :: Layout del detalle de email           *
* @author     :: Javier Stifano <jstifano18@gmail.com> *
********************************************************/

import React from 'react'
import UnreadButton from '../../buttons_inbox/components/btn_unread'
import TrashButton from '../../buttons_inbox/components/btn_trash'
import SpamButton from '../../buttons_inbox/components/btn_spam'
import Detail from './detail'
import EnvelopeLayout from '../../envelope/components/envelope_layout'
import '../../partials/_email-detail.sass'

const EmailDetailLayout = (props) => {
	return (
		<div style={{display: 'flex', flex: 1}}>
			{
				props.data.map((email) => {
					if(email.activated){	
						return <Detail key={email.id} email={email} handleUnread={props.handleUnread}/>
					}
				})
			}
		</div>
	)
}

export default EmailDetailLayout
