/****************************************************************
* Componente :: ButtonsLayout (Dumb Component)                  *
*                                                               *
* Descripción :: Wrapper principal los botones del inbox        *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React, { Component } from 'react'
import InboxButton from '../components/btn_inbox'
import TrashButton from '../components/btn_trash'
import SpamButton from '../components/btn_spam'
import EmailContainer from '../../emails/containers/email_container'
import '../../partials/_buttons-layout.sass'

class ButtonsContainer extends Component{
	render(){
		return (
			<div>
				<div className="buttons-box" style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
					<div className="button-activated">
						<InboxButton/>
						<div className="text-12">Inbox</div>
					</div>
					<div className="button-activated">
						<TrashButton />
						<span className="text-12">Trash</span>
					</div>
					<div className="button-activated">
						<SpamButton />
						<span className="text-12">Spam</span>
					</div>
				</div>
				<div className="border-bottom-box"></div>
				<EmailContainer data={this.props.data}/>
			</div>
		)
	}	
}

export default ButtonsContainer