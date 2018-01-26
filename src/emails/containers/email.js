/********************************************************
* Componente  :: Email Container (Smart Component)      *
*                                                       *
* Descripción :: Lógica para manejar el email del inbox *
* @author     :: Javier Stifano <jstifano18@gmail.com>  *
*********************************************************/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaUser from 'react-icons/lib/fa/user'
import '../../partials/_emails.sass'

class Email extends Component {

	// Hago el call a la funcionalidad readed enviada por PROPS
	emailClicked = () => {
		this.props.handleReaded(this.props.email)
	}	

	render(){
		return (
			<div className={this.props.email.activated ? 'email-container-clicked': 'email-container'} key={this.props.email.id} onClick={this.emailClicked}>
				<div className="header-email">
					<div className="sender">
						<FaUser 
							width={12}
							height={12}
						/>
						<span className="text-title">{this.props.email.from}</span>
					</div>
					<div className="date-email">
						{this.props.email.date}
					</div>
				</div>
				<div className="subject-box">
					{
						this.props.email.isReaded 
						? 
						<div className="subject">
							{this.props.email.subject}
						</div>
						: 
						<div style={{display: 'flex'}}>	
							<div style={{
								backgroundColor: '#4990E2',
							    borderRadius: '50%',
							    width: '10px',
							    position: 'relative',
							    top: '15px',
							    height: '10px',
							    right: '15px'
							}}> 
							</div>
							<div className="subject" style={{right:'9px'}}>
								{this.props.email.subject}
							</div>
						</div>
					}	
				</div>
				<div className="body-emailbox">
					<div className="body-text-emailbox">
						{this.props.email.body.substr(0,40)}
					</div>
				</div>
			</div> 
		)
	}	
}

export default connect()(Email)