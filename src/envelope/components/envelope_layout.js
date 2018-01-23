/****************************************************************
* Componente :: EnvelopeLayout (Dumb Component)                 *
*                                                               *
* Descripción :: Wrapper principal para el envelope de imagen   *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React from 'react'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import './envelope.sass'

const EnvelopeLayout = (props) => {
	return (
		<div className="envelope-box" style={{alignItems: 'center', justifyContent: 'center', 'flex': 1}}>
			<FaEnvelopeO className="envelope-style"/>
		</div>
	)
}

export default EnvelopeLayout