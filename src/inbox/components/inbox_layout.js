import React from 'react'
import ButtonsContainer from '../../buttons_inbox/containers/buttons_container'
import '../../partials/_inbox.sass'

const InboxLayout = (props) => {
	return (
		<div className="inbox-container">
			<ButtonsContainer data={props.data}/>
		</div>
	)
}

export default InboxLayout