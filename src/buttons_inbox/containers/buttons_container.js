/****************************************************************
* Componente  :: ButtonsLayout (Dumb Component)                 *
*                                                               *
* Descripción :: Wrapper principal los botones del inbox        *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import InboxButton from '../components/btn_inbox'
import TrashButton from '../components/btn_trash'
import SpamButton from '../components/btn_spam'
import EmailLayout from '../../emails/components/emails_layout'
import '../../partials/_buttons-layout.sass'

class ButtonsContainer extends Component{
	checkCss = {
		inboxButton: false,
		trashButton: false,
		spamButton: false,
	}

	getInboxMessages = () => {
		this.checkCss.trashButton = false
		this.checkCss.spamButton = false
		this.checkCss.inboxButton = true
		this.props.handleInboxMessages()
	}

	getErasedMessages = () => {
		this.checkCss.trashButton = true
		this.checkCss.spamButton = false
		this.checkCss.inboxButton = false
		this.props.handleErasedMessages()
	}

	getSpamMessages = () => {
		this.checkCss.trashButton = false
		this.checkCss.spamButton = true
		this.checkCss.inboxButton = false
		this.props.handleSpamMessages()
	}

	render(){
		return (
			<div>
				<div className="buttons-box" style={{alignItems: 'center', justifyContent: 'space-evenly'}}>
					<div className={this.checkCss.inboxButton ? 'button-activated blue-activation' : 'button-activated'} onClick={this.getInboxMessages}>
						<InboxButton/>
						<div className="text-12">Inbox</div>
					</div>
					<div className={this.checkCss.trashButton ? 'button-activated blue-activation' : 'button-activated'} onClick={this.getErasedMessages}>
						<TrashButton />
						<span className="text-12">Trash</span>
					</div>
					<div className={this.checkCss.spamButton ? 'button-activated blue-activation' : 'button-activated'} onClick={this.getSpamMessages}>
						<SpamButton />
						<span className="text-12">Spam</span>
					</div>
				</div>
				<div className="border-bottom-box"></div>
				<EmailLayout 
					emails={this.props.emails} 
					handleReaded={this.props.handleReaded}
				/>
			</div>
		)
	}	
}

export default ButtonsContainer