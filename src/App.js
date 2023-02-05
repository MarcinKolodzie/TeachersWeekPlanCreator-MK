import React from 'react'
import ChoseSubjectsForm from './ChoseSubjectsForm/ChoseSubjectsForm'
import CreateWeekPlan from './CreateWeekPlan'
import FullPageLayout from './FullPageLayout'
import Loader from './Loader'
import WelcomeForm from './WelcomeForm'

export class App extends React.Component {
  state = {
    isLoading: false,
    route: 'CREATE-WEEK-PLAN', // 'CHOSE-SUBJECTS' or 'CREATE-WEEK-PLAN'
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
              <WelcomeForm
                onClickGoChoseSubjects={() => this.setState(() => ({ route: 'CHOSE-SUBJECTS' }))}
              />
            </FullPageLayout>
            :
            null
        }

        {
          route === 'CHOSE-SUBJECTS' ?
            <FullPageLayout>
              <ChoseSubjectsForm
                onClickGoBackToWelcome={() => this.setState(() => ({ route: 'WELCOME' }))}
              />
            </FullPageLayout>
            :
            null
        }

        {
          route === 'CREATE-WEEK-PLAN' ?
            <FullPageLayout>
              <CreateWeekPlan />
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
