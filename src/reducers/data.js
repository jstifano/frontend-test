/*******************************************************
* Componente :: Reducer del store de Redux             *
*                                                      *
* Descripción :: Manejador de acciones del store       *
* @author     :: Javier Stifano <jstifano18@gmail.com> *
********************************************************/

const reducer = (state, action) => {
	switch(action.type){
		case 'READ_EMAIL': {
			let results = {
				data: {
					emails: ''
				}
			}
			results.data.emails = state.data.emails.map((email, index) => {
				if(index == action.payload.query.id){
					// Copio el objeto antes de mutarlo y cambio el state
					return Object.assign({}, email, {
						isReaded: true, 
						activated: true
					})
				}
				else {
					return Object.assign({}, email, { 
						activated: false
					})
				} // Retorno el objeto con su mismo estado
			})
			return results
		}
		case 'MARK_AS_UNREAD': {
			state.data.emails.map((email, index) => {
				if(index == action.payload.query.id){
					// Copio el objeto antes de mutarlo y cambio el state
					return Object.assign({}, email, {
						isReaded: false, 
						activated: true
					})
				}
				return email // Retorno el objeto con su mismo estado
			})
			return {
				...state
			}
		}
		case 'GET_INBOX_MESSAGES': {
			let results = []
			const list = state.data
			results = list.filter((email) => !email.isSpam && !email.isErased)
			return {
				...state,
				search: results
			}

		}	
		case 'GET_ERASED_MESSAGES': {
		}
		case 'GET_SPAM_MESSAGES': {
		}
		default: 
			return state
	}
}

export default reducer