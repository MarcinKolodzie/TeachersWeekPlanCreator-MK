import React from 'react'
import FullPageLayout from './FullPageLayout/FullPageLayout'
import Loader from './Loader'
import WelcomeForm from './WelcomeForm'

export class App extends React.Component {
  state = {
    isLoading: false,
    route: 'WELCOME', // 'CHOSE-SUBJECTS' or 'CREATE-WEEK-PLAN'
    subject: ''
  }

  render () {
    const {
      isLoading,
      route
    } = this.state

    return (
      <div>
        {
          route === 'WELCOME' ?
            <FullPageLayout>
              <WelcomeForm/>
            </FullPageLayout>
            :
            null
        }

        {
          isLoading ?
            <FullPageLayout>
              <Loader />
            </FullPageLayout>
            :
            null
        }
      </div>
    )
  }
}

export default App
