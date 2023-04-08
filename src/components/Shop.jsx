import React from 'react'

const Shop = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>{children}</div>
  )
}

export default Shop