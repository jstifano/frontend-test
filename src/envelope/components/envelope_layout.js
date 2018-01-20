/****************************************************************
* Componente :: EnvelopeLayout (Dumb Component)                 *
*                                                               *
* Descripción :: Wrapper principal para el envelope de imagen   *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React from 'react'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import './envelope.css'

const EnvelopeLayout = (props) => {
	return (
		<div className="envelope-box">
			<FaEnvelopeO className="envelope-style"/>
		</div>
	)
}

export default EnvelopeLayout