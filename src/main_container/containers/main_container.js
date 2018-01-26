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
	id = 2

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

	// Lo unico que hace es emular la entrada del correo 
	// No hay validaciones "Solamente emula la entrada"
	// Funcion para enviar correos cada 90 segundos, esta comentadooo!!
	componentDidMount = () => {
		setInterval(this.addEmail, 90000)
	}

	addEmail = () => {
		let email = {
			 "id": this.id,
			 "from":"mhallatt0@walmart.com",
			 "to":"cziem0@surveymonkey.com",
			 "subject":"Office Assistant IV",
			 "body":"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
			 "date":"3/31/2017",
			 "isReaded": false,
			 "isSpam": false,
			 "isErased": false,
			 "activated": false,
			 "avatar":"https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
			 "tag":"Indigo",
			 "attachements":[
			 	{
			 		"file":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
			 		"name":"ut_nulla_sed.jpeg"
			 	}
			]
		}

		this.props.dispatch({
			type: 'ADD_EMAIL',
			payload: {
				query: email,
			}
		})
		this.id += 1
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