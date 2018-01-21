import React from 'react'
import FaCircle from 'react-icons/lib/fa/circle'

const UnreadButton = (props) => {
	return (
		<FaCircle 
			width={props.width}
			height={props.height}
		/>
	)
}

export default UnreadButton