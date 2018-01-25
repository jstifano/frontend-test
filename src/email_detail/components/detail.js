import React, { Component } from 'react'
import UnreadButton from '../../buttons_inbox/components/btn_unread'
import TrashButton from '../../buttons_inbox/components/btn_trash'
import SpamButton from '../../buttons_inbox/components/btn_spam'
import '../../partials/_email-detail.sass'

class Detail extends Component {
	
	markAsUnread = () => {
		this.props.handleUnread(this.props.email)
	}

	render(){
		return (
			<div className="box-email-detail">
				<div className="title-header-detail">
					{this.props.email.subject}
					<div className="box-buttons">
						<div className="buttons-wrapper">
							<div className="highlight-button" onClick={this.markAsUnread}>
								<UnreadButton width={19} height={19}/>
							</div>
							<div className="highlight-button">
								<TrashButton width={19} height={19}/>
							</div>
							<div className="highlight-button">
								<SpamButton width={19} height={19}/>
							</div>
						</div>
					</div>
				</div>
				<div className="body-container">
					<div className="title-body">
						{this.props.email.from}
						<span style={{color: '#4990E2'}}>&nbsp;{'<'+this.props.email.from+'>'}</span>
						<div className="date-body">
							{this.props.email.date}
						</div>
					</div>
					<div className="body-text-detail">
						<p style={{position: 'relative', right:'20px'}}>{this.props.email.body}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Detail