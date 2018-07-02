import React from 'react'

const styles={
  padding: '3em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'Open Sans, sans-serif',
}

const Container = ({ story }) => (
  <div style={styles}>
    { story() }
  </div>
)

export default Container