// import React, { useReducer } from 'react';


// const initValues = {
//     name: '',
//     email: '',
//     address: '',
//     phone: null,
// }

// const actionType = {
//     'next': 'next',
//     'submit': 'submit'
// }

// const reducer = (state, action) => {
//     switch(action.type) {
//         case actionType.next : {
//             return (
//                 {
//                     ...state,
//                     name : state.name,
//                     email : state.email
//                 }
                

//             )
//         }
//         default:
//             return state;
//     }
// }

// function registerReducer() {
//     const [{name, email, address, phone}, dispatch] = useReducer(reducer, initValues);

//   return (
//     <div>
        
//     </div>
//   )
// }

// export default registerReducer