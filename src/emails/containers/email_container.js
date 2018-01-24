import React, { Component } from 'react'
import EmailLayout from '../components/emails_layout'
import Email from '../components/email'
import EmailDetail from '../../email_detail/components/email_detail'

class EmailContainer extends Component {
	render(){
		return (
			<EmailLayout>
				<Email data={this.props.data}/>
			</EmailLayout>
		)
	}
}

export default EmailContainer