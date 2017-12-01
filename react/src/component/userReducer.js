export default function UserReducer(state={},action){
	var reState = JSON.parse(JSON.stringify(state));
	console.log('reducer')
	switch(action.type){
		case 'BeforeRequest':
		 	reState.loading = true;
		 	break;
		 case 'Requested':
		 	reState.loading = false;
		 	reState.dataset = action.dataset;
		 	break;
		 dafault:
		 	reState.loading = false
	}
	return reState;
}

