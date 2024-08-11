import { useState } from "react"

export const useIsCheckTime = ({getTime, minutes, hours}) => {
    const [isCheck, setIsCheck] = useState(false)
    const toggleTime = () => {
        setIsCheck(!isCheck)
        getTime(hours, minutes)
    }
    return {isCheck, toggleTime}
}