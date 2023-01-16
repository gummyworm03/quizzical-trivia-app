# quizzical-trivia-app
January 15, 2023: In the main branch of this repo, I "completed" and deployed the app to https://quizzical-gummyworm.netlify.app/.

This version of the app was created only with the knowledge that I learned in Bob Ziroll's "Learn React for Free" course (https://scrimba.com/learn/learnreact). I had not used any other resource to learn React besides the course, so I wanted to test myself and see what I could do, googling questions as issues came up.

Obviously, the code is far from perfect and definitely breaks some best practices rules. The hardest part was figuring out how to re-fetch data from the API once a new game was started. I kept getting errors when trying to re-fetch the data, because I did not implement any error handling or create a different UI for when the data is fetching. This led to a bad user experience. 

Another major concept that would have been helpful is the children prop for "display" componenets. By splitting the questions and answers into their own compoments and just displaying them on the QuizPage via the children prop, I could've kept state more local.There is also a ton of repeated code in the QuizCard componenet, and I now realize that I should have mapped over the answers/inputs for more concise code. 

This branch is for my second attempt at this app. In the past few days, I have thoroughly gone through the React docs (https://beta.reactjs.org/) and researched best practices for React, especially when it comes to fetching data.

I will be following the "Thinking in React" process laid out in the React docs for this second attempt: https://beta.reactjs.org/learn/thinking-in-react.

I have created this mockup as the first step: https://imgur.com/a/HClc9rz.

Let's try this again!

January 8, 2023: This project will be my first React app, with the idea and and design provided by Scrimba's "Learn React for Free" course. This course really took my understanding of React to a new level, so I am excited to see how much information I have absorbed. Let's go!
Project I am referencing is here: https://scrimba.com/learn/learnreact/react-section-4-solo-project-co24f49bea8aace7c174082c8.

