/*******************************************************************
* Componente :: Email Layout (Dumb Component)                      *
*                                                                  *
* Descripción :: Layout para renderizar todos los emails del inbox *
* @author     :: Javier Stifano <jstifano18@gmail.com>             *
********************************************************************/

import React from 'react'
import Email from '../containers/email'

const EmailLayout = (props) => {
	return (
		<div>
			{
				props.data.map((item) => {
					return <Email key={item.id} email={item} emails={props.emails} handleReaded={props.handleReaded}/>
				})
			}
		</div>
	)
}

export default EmailLayout