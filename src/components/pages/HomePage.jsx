import React from "react"
import FeedbackList from "../../components/FeedbackList.jsx"
import FeedbackStats from "../../components/FeedbackStats.jsx"
import FeedbackForm from "../../components/FeedbackForm.jsx"
import { FeedbackProvider } from "../../context/FeedbackContext.js"
function HomePage(){


    return(
        
        <FeedbackProvider>
            <FeedbackForm />
            <FeedbackStats/>
            <FeedbackList /> 
        </FeedbackProvider> 
        
    )
}

export default HomePage