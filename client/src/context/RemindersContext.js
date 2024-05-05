import { createContext, useReducer } from 'react'

export const RemindersContext = createContext()

export const remindersReducer = (state, action) => {
    switch (action.type) {
        case 'GET_REMINDERS':
            return {
                ...state,
                reminders: action.payload.sort((a, b) => new Date(a.date) - new Date(b.date)),
            }
        case 'CREATE_REMINDER':
            return {
                ...state,
                reminders: [...state.reminders, action.payload].sort((a, b) => new Date(a.date) - new Date(b.date)),
            }
        case 'DELETE_REMINDER':
            return {
                ...state,
                reminders: state.reminders.filter(
                    (reminder) => reminder._id !== action.payload
                ),
            }
        case 'UPDATE_REMINDER':
            return {
                ...state,
                reminders: state.reminders.map((reminder) =>
                    reminder._id === action.payload._id ? action.payload : reminder
                ).sort((a, b) => new Date(a.date) - new Date(b.date)),
            }
        case 'CLEAR':
            return {
                ...state,
                reminders: [],
            }
        default:
            return state
    }
}

export const RemindersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(remindersReducer, {
        reminders: [],
    })

    return (
        <RemindersContext.Provider value={{...state, dispatch}}>
            {children}
        </RemindersContext.Provider>
    )
}