import React from 'react'
import FaUser from 'react-icons/lib/fa/user'
import './emails.css'

const EmailLayout = (props) => {
	return (
		<div className="email-container">
			
			<div className="header-email">
				<div className="sender">
					<FaUser 
						width={12}
						height={12}
					/>
					<span className="text-title">Amazon.com</span>
				</div>
				<div className="date-email">
					May 26
				</div>
			</div>
			
			<div className="subject-box">
				<div className="blue-circle"></div>		
				<div className="subject">
					El titulo ira escrito aqui
				</div>
			</div>

			<div className="body-box">
				<div className="body-text">
					El body del email
				</div>
			</div>
		</div>
	)
}

export default EmailLayout