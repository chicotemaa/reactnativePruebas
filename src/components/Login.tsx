import React from 'react'
import { useReducer } from 'react'

interface AuthState {
    validando:boolean,
    token:string | null,
    username:string,
    nombre:string

}

const initialState: AuthState ={
    validando:true,
    token:null,
    username:'',
    nombre:''
}

type AuthAction = {type: 'logout' }

const authReducer=(state:AuthState , action:AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            
            break;
    
        default:
            return state;
    }
}



export const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
          <h3>Login</h3>  

            <div className="alert alert-info">
                Validando...
            </div>
            <div className="alert alert-danger">
                No autenticado
            </div>
            <div className="alert alert-success">
                Autenticado
            </div>
            <button
            className="btn btn-primary"
            >
            login
            </button>
            <button
            className="btn btn-danger"
            >
            logout
            </button>

        </>
    )
}
