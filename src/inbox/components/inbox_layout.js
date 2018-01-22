import React from 'react'
import ButtonsContainer from '../../buttons_inbox/containers/buttons_container'
import './inbox.css'

const InboxLayout = (props) => {
	return (
		<div className="inbox-container">
			<ButtonsContainer data={props.data}/>
		</div>
	)
}

export default InboxLayout