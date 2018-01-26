import React, { Component } from 'react'
import EmailDetailLayout from '../components/email_detail'

const EmailDetail = (props) => {
	return (
		<EmailDetailLayout emails={props.emails} handleUnread={props.handleUnread}/>
	)
}

export default EmailDetail