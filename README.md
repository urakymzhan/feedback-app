# Feedback App - React Context API

#### Run the Project
- `npm install`
- `npm start`

#### Prerequisites
- Knowledge of React Basics
- React Router Dom (both v5 and v6)
- Hooks
- React Context (you can learn by doing this challenge)

#### Challenge
The idea of this challenge is to add [React Context API](https://reactjs.org/docs/context.html) to the existing project

Currently this project is passing down from `App.js`

- feedback (state)
- addFeeback (function)
- deleteFeeback (function)

```jsx
    <FeedbackForm handleAdd={addFeeback} />
    <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} handleDelete={deleteFeeback} />

```

How do you utilize Context API to eliminate passing down props and storing global state in context ?

### Steps

If you don't know where to start. Try to follow below steps to assit you.

1. Create a folder called **context** inside **src** folder.
2. Create a file called **FeedbackContext**
3. Import `createContext` from `react` and use it create a context.
4. Create FeedbackProvider component:
```jsx
    export const FeedbackProvider = ({children}) => {
        // ...
        // move your feedback state, functions to here
        // const [feedback, setFeedback] = useState(FeedbackData)
        // ...
        return <FeedbacContext.Provider
            value={{feeback}}>
            {children}
            </FeebackContext.Provider>
        >
    }
```
5. Import `FeedbackProvider` from `context/FeedbackContext` to `App.js`
6. Wrap all your component inside this `FeedbackProvider`.
7. Using `useContext` hook, cleanup `FeedbackList.jsx` file to use state from context but not from `App.js`
8. Don't forget to delete `feedback` from 
```jsx
    <FeedbackList feedback={feedback} handleDelete={deleteFeeback} /> 
```
9. Move your functions (deleteFeeback, addFeeback) to `FeedbackContext.jsx` file and cleanup `FeedbackList.jsx`, `FeedbackItem.jsx` files. Basically wherever you are using `handleDelete`, `handleAdd` functions.
10. Cleanup `App.js`,(all state, props etc),  `FeedbackForm.jsx` (addFeedback) to use context data.
11. Overall, your `FeedbackContext.jsx` file should contain global `feebdack` state and `deleteFeedback`, `addFeedback` functions. 
12. `App.js` should be clean at the end of all migrations and will be pure component.

#### Author
- Author of this project: [Traversy Media](https://www.youtube.com/c/TraversyMedia)
- Project is not complete. Some piece of it was used. 