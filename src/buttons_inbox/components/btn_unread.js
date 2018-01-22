import React from 'react'
import FaCircle from 'react-icons/lib/fa/circle'

const UnreadButton = (props) => {
	return (
		<div className="button-hover">
			<FaCircle 
				width={props.width}
				height={props.height}
			/>
		</div>
	)
}

export default UnreadButton