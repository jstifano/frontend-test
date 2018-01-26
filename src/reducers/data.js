/*******************************************************
* Componente :: Reducer del store de Redux             *
*                                                      *
* Descripción :: Manejador de acciones del store       *
* @author     :: Javier Stifano <jstifano18@gmail.com> *
********************************************************/

const reducer = (state, action) => {
	switch(action.type){
		case 'ADD_EMAIL': {
			let results = {
				data: {
					emails: []
				},
				search: []
			}
			return {
				...state,
				search: [...state.search, action.payload.query]
			}
			
		}
		case 'READ_EMAIL': {
			let results = {
				data: {
					emails: ''
				},
				search: []
			}
			results.data.emails = state.data.emails.map((email, index) => {
				if(index == action.payload.query.id){
					// Copio el objeto antes de mutarlo y cambio el state
					return Object.assign({}, email, action.payload.query)
				}
				else{
					return Object.assign({}, email, {
						activated: false
					})
				}
			})
			results.search = state.data.emails.filter((item) => item.id == action.payload.query.id)
			return results
		}
		case 'MARK_AS_UNREAD': {
			let results = {
				data: {
					emails: ''
				},
				search: []
			}
			results.data.emails = state.data.emails.map((email, index) => {
				if(index == action.payload.query.id){
					// Copio el objeto antes de mutarlo y cambio el state
					return Object.assign({}, email, {
						isReaded: false,
						isSpam: false,
						isErased: false, 
						activated: true
					})
				}
				else {
					return Object.assign({}, email, { 
						activated: false
					})
				}
			})
			results.search = [] // Devuelvo vacio ya que no se busca
			return results
		}
		case 'MARK_AS_TRASH': {
			let results = {
				data: {
					emails: ''
				},
				search: []
			}
			results.data.emails = state.data.emails.map((email, index) => {
				if(index == action.payload.query.id){
					// Copio el objeto antes de mutarlo y cambio el state
					return Object.assign({}, email, {
						isSpam: false,
						isErased: true, 
						activated: true
					})
				}
				else {
					return Object.assign({}, email, { 
						activated: false
					})
				}
			})
			results.search = [] // Devuelvo vacio ya que no se busca
			return results
		}
		case 'MARK_AS_SPAM': {
			let results = {
				data: {
					emails: ''
				},
				search: []
			}
			results.data.emails = state.data.emails.map((email, index) => {
				if(index == action.payload.query.id){
					// Copio el objeto antes de mutarlo y cambio el state
					return Object.assign({}, email, {
						isSpam: true,
						isErased: false, 
						activated: true
					})
				}
				else {
					return Object.assign({}, email, { 
						activated: false
					})
				}
			})
			results.search = [] // Devuelvo vacio ya que no se busca
			return results
		}
		case 'GET_INBOX_MESSAGES': {
			let results = {
				data: {
					emails: ''
				},
				search: []
			}

			results.data.emails = state.data.emails
			results.data.emails = results.data.emails
			results.search = state.data.emails.filter((email) => !email.isSpam && !email.isErased)
			if(results.search.length == 0) results.search = []
			return results
		}	
		case 'GET_ERASED_MESSAGES': {
			let results = {
				data: {
					emails: ''
				},
				search: []
			}

			results.data.emails = state.data.emails
			results.search = state.data.emails.filter((email) => email.isErased && !email.isSpam)
			if(results.search.length == 0) results.search = []
			return results
		}
		case 'GET_SPAM_MESSAGES': {
			let results = {
				data: {
					emails: ''
				},
				search: []
			}

			results.data.emails = state.data.emails
			results.search = state.data.emails.filter((email) => email.isSpam && !email.isErased)
			if(results.search.length == 0) results.search = []
			return results
		}
		default: 
			return state
	}
}

export default reducer