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
import '../components/buttons_layout.sass'

class ButtonsContainer extends Component{
	render(){
		return (
			<div>
				<div className="buttons-box" style={{alignItems: 'center', justifyContent: 'space-evenly', top: '10px'}}>
					<div style={{display: 'flex', cursor: 'pointer'}}>
						<InboxButton/>
						<span className="text-12" style={{top: '3px'}}>Inbox</span>
					</div>
					<div style={{display: 'flex', cursor: 'pointer'}}>
						<TrashButton />
						<span className="text-12" style={{top: '3px'}}>Trash</span>
					</div>
					<div style={{display: 'flex', cursor: 'pointer'}}>
						<SpamButton />
						<span className="text-12" style={{top: '3px'}}>Spam</span>
					</div>
				</div>
				<div className="border-bottom-box"></div>
				<EmailContainer data={this.props.data}/>
			</div>
		)
	}	
}

export default ButtonsContainer