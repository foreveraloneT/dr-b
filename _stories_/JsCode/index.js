import React from 'react'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight'
import 'highlight.js/styles/vs.css'
import './index.scss'

const JsCode = ({
   children,
   topic = 'Example'
}) => (
  <div>
    <h3>{topic}</h3>
    <pre className='code-container'>
      <code>
        <Highlight className='js'>
          { children }
        </Highlight>
      </code>
    </pre>
  </div>
)

JsCode.propTypes = {
  children: PropTypes.any.isRequired,
  topic: PropTypes.string,
}

export default JsCode
