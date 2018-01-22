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
import EmailLayout from '../../emails/components/emails_layout'
import '../components/buttons_layout.css'

class ButtonsContainer extends Component{
	render(){
		return (
			<div>
				<div className="buttons-box">
					<div className="button-hover">
						<InboxButton/>
						<span className="text-12 button-hover">Inbox</span>
					</div>
					<div className="button-hover">
						<TrashButton />
						<span className="text-12 button-hover">Trash</span>
					</div>
					<div className="button-hover">
						<SpamButton />
						<span className="text-12 button-hover">Spam</span>
					</div>
				</div>
				<div className="border-bottom-box"></div>
				<EmailLayout data={this.props.data}/>
			</div>
		)
	}	
}

export default ButtonsContainer