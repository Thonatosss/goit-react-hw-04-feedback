import React, { useState } from 'react';
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from 'components/Section/Section';
import Notification from 'components/Notifications/Notifications';
import { AppWrapper } from './App.styled';



function App () {

    const[good, setGoodFeedback]=useState(0);
    const[neutral, setNeutralFeedback]=useState(0);
    const[bad, setBadFeedback]=useState(0);
    const feedbackOptions = {good, neutral, bad};
    const options = Object.keys(feedbackOptions);


   const handleFeedback = option => {
        switch(option){
            case 'good':
                setGoodFeedback(prevGood => prevGood + 1)
                break;
           
            case 'neutral':
                setNeutralFeedback(prevNeutral => prevNeutral +1);
                break

            case 'bad':
                setBadFeedback(prevBad => prevBad +1);
                break; 

            default: return;    
        }
    }
    const countTotalFeedback = () => {
        return good + neutral + bad;
    }
    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return Math.round((good / total) * 100);
    }
        return (
            <AppWrapper>
                <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={options}
                        onHandleFeedback={handleFeedback}
                    />
                </Section>
                
                <Section title={'Statistics'}>
                    {countTotalFeedback() === 0 ? (
                        <Notification message={'There is no feedback :('} />
                    ) :
                        <Statistics
                            good={good} neutral={neutral} bad={bad} total={countTotalFeedback} percentage={countPositiveFeedbackPercentage}
                        />
                    }
                   
                </Section>
                
               
            </AppWrapper>



        );
    }


export {App};