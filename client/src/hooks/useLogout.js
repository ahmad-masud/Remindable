import { useAuthContext } from "./useAuthContext"
import { useRemindersContext } from "./useRemindersContext"

export const useLogout = () => {
    const { dispatch: authDispatch } = useAuthContext()
    const { dispatch: remindersDispatch } = useRemindersContext()

    const logout = () => {
        localStorage.removeItem('user')
        authDispatch({ type: 'LOGOUT' })
        remindersDispatch({ type: 'CLEAR' })
    }

    return { logout }
}