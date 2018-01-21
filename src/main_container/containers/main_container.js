import React, { Component } from 'react'

// Componentes de la aplicación
import MainLayout from '../components/main_layout'
import EnvelopeLayout from '../../envelope/components/envelope_layout'
import InboxLayout from '../../inbox/components/inbox_layout'

class MainContainer extends Component {
	render(){
		return (
			<MainLayout>
				<InboxLayout>
				</InboxLayout>
				<EnvelopeLayout />
			</MainLayout>
		)	
	}
}

export default MainContainer