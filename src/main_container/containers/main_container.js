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
	emptyBox = true; // Estado para en el envelope

	// Manejo el click de los emails desde el contenedor padre
	handleReaded = (email) => {
		this.props.dispatch({
			type: 'READ_EMAIL',
			payload: {
				query: email,
			}
		})
		this.emptyBox = false
	}

	// Funcion para marcar como "No leido el correo"
	handleUnread = (email) => {
		this.props.dispatch({
			type: 'MARK_AS_UNREAD',
			payload: {
				query: email,
			}
		})
	}

	render(){
		return (
			<MainLayout>
				<InboxLayout 
					data={this.props.data}
					handleReaded={this.handleReaded}
				>
				</InboxLayout> 
				{ this.emptyBox ? <EnvelopeLayout /> : ''}
				{ this.props.data.length > 0 && !this.emptyBox ? 
					<EmailDetail 
						data={this.props.data}
						handleUnread={this.handleUnread} 
					/>: '' 
				}
			</MainLayout>
		)	
	}
}

function mapStateToProps(state, props){
	return {
		data: state // Estado con el arreglo de correos del store
	}
}

// Le envio con "Connect" los parametros actualizados del store
export default connect(mapStateToProps)(MainContainer)