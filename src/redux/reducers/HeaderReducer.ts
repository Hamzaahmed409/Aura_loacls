const initialState = {
    selectedLocation: null,
};

const HeaderReducer = (state = initialState, action: { type: any; payload: { selectedLocation: any; }; }) => {
    switch (action.type) {
        case 'selectLocation':
            return {
                ...state,
                selectedLocation: action.payload.selectedLocation,
            };
    }

    return state;
};

export default HeaderReducer;
