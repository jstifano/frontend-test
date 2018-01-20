/****************************************************************
* Componente :: ButtonsLayout (Dumb Component)                  *
*                                                               *
* Descripción :: Wrapper principal los botones del inbox        *
* @author     :: Javier Stifano <jstifano18@gmail.com>          *
*****************************************************************/

import React from 'react'
import InboxButton from './btn_inbox'
import TrashButton from './btn_trash'
import SpamButton from './btn_spam'
import './buttons_layout.css'

const ButtonsLayout = (props) => {
	return (
		<div>
			<div className="buttons-box">
				<div className="button-hover">
					<InboxButton></InboxButton>&nbsp;
					<span className="text-12">Inbox</span>
				</div>
				<div className="button-hover">
					<TrashButton></TrashButton>&nbsp;
					<span className="text-12">Trash</span>
				</div>
				<div className="button-hover">
					<SpamButton></SpamButton>&nbsp;
					<span className="text-12">Spam</span>
				</div>
			</div>
			<div className="border-bottom-box"></div>
		</div>
	)
}

export default ButtonsLayout