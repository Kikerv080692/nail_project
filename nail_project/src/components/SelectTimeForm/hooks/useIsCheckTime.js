import { useState } from "react"

export const useIsCheckTime = (getTime) => {
    const [isCheck, setIsCheck] = useState(false)
    const toggleTime = () => {
        setIsCheck(!isCheck)
        getTime(hours, minutes)
    }
    return {isCheck, toggleTime}
}