export const allocateReducer = (state={allocate:[]} , action) => {
    switch(action.type){
    case "allocate": 
        return {
          ...state,
          allocate : [action.payload, ...state.allocate]	
        }
}
return state;
}