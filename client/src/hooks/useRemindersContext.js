import { RemindersContext } from '../context/RemindersContext'
import { useContext } from 'react'

export const useRemindersContext = () => {
    const context = useContext(RemindersContext)

    if (!context) {
        throw new Error('useRemindersContext must be used within a RemindersProvider')
    }

    return context
}