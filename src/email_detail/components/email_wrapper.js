import React, { Component } from 'react'
import EmailDetailLayout from '../components/email_detail'

const EmailDetail = (props) => {
	return (
		<EmailDetailLayout 
			search={props.search} 
			handleUnread={props.handleUnread}
			handleDelete={props.handleDelete}
			handleSpam={props.handleSpam} 
		/>
	)
}

export default EmailDetail