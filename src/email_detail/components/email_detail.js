import React from 'react'
import UnreadButton from '../../buttons_inbox/components/btn_unread'
import TrashButton from '../../buttons_inbox/components/btn_trash'
import SpamButton from '../../buttons_inbox/components/btn_spam'
import './email_detail.css'

const EmailDetailLayout = (props) => {
	const correo = '<noreply@gmail.com>'

	return (
		<div className="box-email-detail">
			<div className="title-header-detail">
				Aqui estará el titulo
				<div className="box-buttons">
					<div className="buttons-wrapper">
						<div style={{cursor: 'pointer'}}>
							<UnreadButton width={19} height={19}/>
						</div>
						<div style={{cursor: 'pointer'}}>
							<TrashButton width={19} height={19}/>
						</div>
						<div style={{cursor: 'pointer'}}>
							<SpamButton width={19} height={19}/>
						</div>
					</div>
				</div>
			</div>
			<div className="body-container">
				<div className="title-body">
					Amazon.com
					<span style={{color: '#4990E2'}}>&nbsp;{correo}</span>
					<div className="date-body">
						Thursday, 30th
					</div>
				</div>
				<div className="body-text-detail">
					<p style={{position: 'relative', right:'20px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed non sem quis tellus vulputate lobortis. Vivamus fermentum, tortor id ornare ultrices, ligula ipsum tincidunt pede, et blandit sem pede suscipit pede. Nulla cursus porta sem. Donec mollis nunc in leo.</p>
				</div>
			</div>
		</div>
	)
}

export default EmailDetailLayout
