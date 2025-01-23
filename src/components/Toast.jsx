import React from "react"
import { CheckCircle2, XCircle } from "lucide-react"

const Toast = ({ isVisible, isSuccess, message, onClose }) => {
  if (!isVisible) return null

  const bgColor = isSuccess ? "bg-[#F6FEF9]" : "bg-[#FADDDD]"
  const iconColor = isSuccess ? "text-[#255427]" : "text-[#7A0000]"

  return (
    <div className={`fixed w-full max-w-[1000px] mx-auto bottom-4 h-[117px] transform flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${bgColor}`}>
      {isSuccess ? <CheckCircle2 className={`w-[100px] h-[100px] ${iconColor}`} /> : <XCircle className={`w-[100px] h-[100px] ${iconColor}`} />}
      <p className="text-[#14142A] text-[16px] font-bold">{message}</p>
      <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">×</button>
    </div>
  )
}

export default Toast