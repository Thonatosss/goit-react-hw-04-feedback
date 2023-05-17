import React, { Component } from 'react';
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from 'components/Section/Section';
import Notification from 'components/Notifications/Notifications';
import { AppWrapper } from './App.styled';



class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleFeedback = option => {
        this.setState(prevFeedback => ({
            [option]: prevFeedback[option] + 1,
        }))
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return Math.round((good / total) * 100);
    }


    render() {
        const options = Object.keys(this.state);
        const { good, neutral, bad } = this.state;
        return (
            <AppWrapper>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={options}
                        onHandleFeedback={this.handleFeedback}
                    />
                </Section>
                
                <Section title={'Statistics'}>
                    {this.countTotalFeedback() === 0 ? (
                        <Notification message={'There is no feedback :('} />
                    ) :
                        <Statistics
                            good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} percentage={this.countPositiveFeedbackPercentage}
                        />
                    }
                   
                </Section>
                
               
            </AppWrapper>



        );
    }
}


export {App};