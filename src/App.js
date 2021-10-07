// import React, { useReducer, createContext, useState } from 'react';
import React, { useReducer, useEffect} from 'react'
// import Counter from './components/Counter';
// import CounterHook from './components/CounterHook';
// import ItemHook from './components/ItemHook'
// import FormHook from './components/FormHook'
// // import ClassEffect from './components/ClassEffect'
// import EffectHook from './components/EffectHook';
// import MouseEventEffect from './components/MouseEventEffect'
// import DataFetch from './components/DataFetch';
// import DataFetchById from './components/DataFetchById';
// import ComponentC from './components/ComponentC';
// import CounterReducer from './components/CounterReducer';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
import axios from 'axios'
import WrapComponent from './components/WrapComponent';
import DocTitleUpdate1 from './components/DocTitleUpdate1';
import DocTitleUpdate2 from './components/DocTitleUpdate2';
import Form from './components/Form';

// export const UserContext = createContext();
// export const LanguageContext = createContext();

// export const CountContext = createContext()

// const initialState = {
//     loading: true,
//     error: '',
//     post: {}
// }

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'FETCH_SUCCESS':
//             return {
//                 loading: false,
//                 post: action.payload,
//                 error: ''
//             }
//         case 'FETCH_ERROR':
//             return {
//                 loading: false,
//                 post: {},
//                 error: 'データの取得に失敗しました。'
//             }
//         default:
//             return state
//     }
// }
// const initialState = {
//     firstCounter: 0
// }
// const reducer = (state, action) => {
//     switch(action.type){
//         case 'increment1':
//             return { ...state, firstCounter: state.firstCounter + action.value};
//         case 'decrement1':
//             return { ...state, firstCounter: state.firstCounter - action.value};
//         case 'reset':
//             return initialState;
//         default:
//             return state;
//     }
// }


function App () {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     useEffect(() => {
//         axios
//         .get('https://jsonplaceholder.typicode.com/posts/1')
//         .then(res => {
//             dispatch({type: 'FETCH_SUCCESS', payload: res.data})//成功時
//         })
//         .catch(err => {
//             dispatch({type: 'FETCH_ERROR'})
//         })
//     })
    // const [user, setUser] = useState({name: 'yamada', age : '32'});
    // const [language, setLanguage] = useState('日本語');

    // const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='App'>

            {/* <Counter /> */}
            {/* <CounterHook /> */}
            {/* <FormHook /> */}
            {/* <ItemHook /> */}
            {/* <EffectHook /> */}
            {/* <MouseEventEffect /> */}
            {/* <DataFetch /> */}
            {/* <DataFetchById /> */}
            {/* <UserContext.Provider value={user}>
                <LanguageContext.Provider value={language}>
                    <ComponentC />
                </LanguageContext.Provider>
            </UserContext.Provider> */}
            {/* <CounterReducer /> */}
            {/* <h1>カウント:{count.firstCounter}</h1>
            <CountContext.Provider
                value={{countState: count, countDispatch: dispatch}}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </CountContext.Provider> */}
            {/* 共有したいプロパティをValueに持たせ、コンポーネントを囲うことで、コンポーネント間でプロパティを共有することができる */}
            {/* <h1>{state.loading ? 'Loading...': state.post.title}</h1>
            <h2>{state.error ? state.error: null}</h2> */}
            {/* <WrapComponent /> */}
            {/* <h1>Custom Hook</h1>
            <DocTitleUpdate1 />
            <DocTitleUpdate2 /> */}
            <Form />
        </div>
    );
}

export default App;