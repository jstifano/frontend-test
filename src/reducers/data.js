/*******************************************************
* Componente :: Reducer del store de Redux             *
*                                                      *
* Descripción :: Manejador de acciones del store       *
* @author     :: Javier Stifano <jstifano18@gmail.com> *
********************************************************/

const reducer = (state, action) => {
	switch(action.type){
		case 'READ_EMAIL': {
			return state.map((email, index) => {
				if(index == action.payload.query.id){
					// Copio el objeto antes de mutarlo
					return Object.assign({}, email, {
						isReaded: true, 
						activated: true
					})
				}
				else {
					return Object.assign({}, email, { 
						activated: false // Desactivo la lectura del mensaje
					})
				}
				return email // Retorno el estado de ese objeto cambiado
			})
		}
		case 'MARK_AS_UNREAD': {
			return state.map((email, index) => {
				if(index == action.payload.query.id){
					// Copio el objeto antes de mutarlo y cambio el state
					return Object.assign({}, email, {
						isReaded: false, 
						activated: true
					})
				}
				return email // Retorno el objeto con su mismo estado
			})
		}
		default: 
			return state
	}
}

export default reducer