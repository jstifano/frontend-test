import React from 'react'
import ButtonsLayout from '../../buttons_inbox/components/btn_layout_inbox'
import EmailLayout from '../../emails/components/emails_layout'
import './inbox.css'

const InboxLayout = (props) => {
	return (
		<div className="inbox-container">
			<ButtonsLayout />
			<EmailLayout />
		</div>
	)
}

export default InboxLayout