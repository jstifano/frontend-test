import React from 'react'
import FaUser from 'react-icons/lib/fa/user'
import './emails.css'

const EmailLayout = (props) => {
	console.log("Email layout >>>", props)

	return (
		<div>
			{
				props.data.map((item) => {
					return (
					<div className="email-container" key={item.id}>
						<div className="header-email">
							<div className="sender">
								<FaUser 
									width={12}
									height={12}
								/>
								<span className="text-title">{item.from}</span>
							</div>
							<div className="date-email">
								{item.date}
							</div>
						</div>
						<div className="subject-box">
							{!item.isReaded 
								? 
								<div style={{display: 'flex'}}>	
									<div className="blue-circle"></div>
									<div className="subject">
										{item.subject}
									</div>
								</div>
								: 
								<div className="subject" style={{left:'10px'}}>
									{item.subject}
								</div>
							}	
						</div>
						<div className="body-emailbox">
							<div className="body-text-emailbox">
								{item.body.substr(0,40)}
							</div>
						</div>
					</div> )
				})
			}
		</div>
	)
}

export default EmailLayout