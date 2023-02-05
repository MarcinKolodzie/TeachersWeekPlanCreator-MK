import React from 'react'
import Loader from './Loader'

export class App extends React.Component {
  state = {
    isLoading: false,
    route: 'WELCOME', // 'CHOSE-SUBJECTS' or 'CREATE-WEEK-PLAN'
    subject: ''
  }

  render () {
    const { isLoading } = this.state

    return (
      <div>
        <h1>MK APP</h1>
        {
          isLoading ?
            <Loader />
            :
            null
        }
      </div>
    )
  }
}

export default App
