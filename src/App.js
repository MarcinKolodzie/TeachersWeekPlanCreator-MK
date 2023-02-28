import React from 'react'
import ChoseSubjectsForm from './ChoseSubjectsForm/ChoseSubjectsForm'
import CreateWeekPlan from './CreateWeekPlan'
import FullPageLayout from './FullPageLayout'
import Loader from './Loader'
import StyledTextHead from './StyledTextHead'
import StyledTextHeadItem from './StyledTextHeadItem'
import WelcomeForm from './WelcomeForm'

export class App extends React.Component {
  state = {
    isLoading: false,
    route: 'WELCOME', // 'CHOSE-SUBJECTS' or 'CREATE-WEEK-PLAN'
    subject1: '',
    subject2: '',
    subject3: ''
  }

  render () {
    const {
      isLoading,
      subject1,
      subject2,
      subject3,
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
                sub1={subject1}
                sub2={subject2}
                sub3={subject3}
                onChangeSubject1={(e) => this.setState(() => ({ subject1: e.target.value }))}
                onChangeSubject2={(e) => this.setState(() => ({ subject2: e.target.value }))}
                onChangeSubject3={(e) => this.setState(() => ({ subject3: e.target.value }))}
                onClickGoCreate={() => this.setState(() => ({ route: 'CREATE-WEEK-PLAN' }))}
                onClickGoBackToWelcome={() => this.setState(() => ({ route: 'WELCOME' }))}
              />
            </FullPageLayout>
            :
            null
        }

        {
          route === 'CREATE-WEEK-PLAN' ?
            <FullPageLayout>
              <StyledTextHead>
                <StyledTextHeadItem
                  text={subject1}
                />
                <StyledTextHeadItem
                  text={subject2}
                />
                <StyledTextHeadItem
                  text={subject3}
                />
              </StyledTextHead>
              <CreateWeekPlan
                subject1={subject1}
                subject2={subject2}
                subject3={subject3}
              />
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
