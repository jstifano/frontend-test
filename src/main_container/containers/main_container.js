/*******************************************************
* Componente :: Main Container (Smart Component)       *
*                                                      *
* Descripción :: Lógica principal de la Aplicación     *
* @author     :: Javier Stifano <jstifano18@gmail.com> *
********************************************************/

import React, { Component } from 'react'
import { connect } from 'react-redux'

// Componentes de la aplicación
import MainLayout from '../components/main_layout'
import EnvelopeLayout from '../../envelope/components/envelope_layout'
import InboxLayout from '../../inbox/components/inbox_layout'
import EmailDetail from '../../email_detail/components/email_wrapper'

class MainContainer extends Component {	
	emptyBox = true // Estado para en el envelope

	// Manejo el click de los emails desde el contenedor padre
	handleReaded = (email) => {
		this.emptyBox = false
		
		email.isReaded = true
		email.activated = true

		this.props.dispatch({
			type: 'READ_EMAIL',
			payload: {
				query: email,
			}
		})
	}

	// Funcion para marcar como "No leido el correo"
	handleUnread = (email) => {
		this.emptyBox = true
		this.props.dispatch({
			type: 'MARK_AS_UNREAD',
			payload: {
				query: email,
			}
		})
	}

	// Funcion para marcar como "No leido el correo"
	handleDelete = (email) => {
		this.emptyBox = true
		this.props.dispatch({
			type: 'MARK_AS_TRASH',
			payload: {
				query: email,
			}
		})
	}

	// Funcion para marcar como "No leido el correo"
	handleSpam = (email) => {
		this.emptyBox = true
		this.props.dispatch({
			type: 'MARK_AS_SPAM',
			payload: {
				query: email,
			}
		})
	}

	// Manejo el buzon de los mensajes eliminados
	handleInboxMessages = () => {
		this.emptyBox = true
		this.props.dispatch({
			type: 'GET_INBOX_MESSAGES',
		})
	}

	// Manejo el buzon de los mensajes eliminados
	handleErasedMessages = () => {
		this.emptyBox = true
		this.props.dispatch({
			type: 'GET_ERASED_MESSAGES',
		})
	}

	// Manejo el buzon de los mensajes de spam
	handleSpamMessages = () => {
		this.emptyBox = true
		this.props.dispatch({
			type: 'GET_SPAM_MESSAGES',
		})
	}

	render(){
		return (
			<MainLayout>
				<InboxLayout 
					emails={this.props.emails}
					search={this.props.search}
					handleReaded={this.handleReaded}
					handleInboxMessages={this.handleInboxMessages}
					handleErasedMessages={this.handleErasedMessages}
					handleSpamMessages={this.handleSpamMessages}
				>
				</InboxLayout> 
				{ this.props.emails.length == 0 || this.emptyBox ? 
					<EnvelopeLayout /> : 
					<EmailDetail 
						emails={this.props.emails} 
						search={this.props.search}
						handleUnread={this.handleUnread}
						handleDelete={this.handleDelete}
						handleSpam={this.handleSpam} 
					/> 
				}
			</MainLayout>
		)	
	}
}

const mapStateToProps = (state, props) => {
	return {
		emails: state.data.emails,
		search: state.search
	}
}

// Le envio con "Connect" los parametros actualizados del store
export default connect(mapStateToProps)(MainContainer)