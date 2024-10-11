

import React from 'react'

const LabelPrice = ({label,price}) => {
  return (
    <div>
        <p>{label}</p>
        <p>INR:{price}</p>
    </div>
  )
}

export default LabelPrice