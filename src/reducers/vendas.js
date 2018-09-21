export default function vendas(state = [], action) {

    switch (action.type) {
        case 'ADD_VENDA':
            return [ ...state, { 
                id: Math.random(), 
                text: action.text  
            }  ]
        default:
            return state;
    }
}

