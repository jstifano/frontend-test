/*******************************************************
* Componente :: Email Detail (Dumb Component)          *
*                                                      *
* Descripción :: Layout del detalle de email           *
* @author     :: Javier Stifano <jstifano18@gmail.com> *
********************************************************/

import React from 'react'
import Detail from './detail'
import '../../partials/_email-detail.sass'

const EmailDetailLayout = (props) => {
	return (
		<div style={{display: 'flex', flex: 1}}>
			{
				props.search.map((email) => {	
					email.activated  
					return <Detail key={email.id} email={email} handleUnread={props.handleUnread} handleDelete={props.handleDelete} handleSpam={props.handleSpam}/>		
				})
			}
		</div>
	)
}

export default EmailDetailLayout
