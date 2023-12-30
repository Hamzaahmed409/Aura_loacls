import * as Actions from "@/redux/actions/Actions";


const initialState = {
    show: false,
    data: null,
};
  
const ModalReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case Actions.SET_SHOW_MODAL:
            return {
                show: true,
                data: action.payload
            };
        case Actions.SET_HIDE_MODAL:
            return {
                show: false,
                data: null
            };
        default:
            return state;  
    }
};
  
export default ModalReducer;
  