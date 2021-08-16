# calculator app

## [Live preview](https://upbeat-chandrasekhar-98354c.netlify.app/)

App whose purpose is to practice react and typescript

## Requirements:

- It must be possible to perform basic calculations (+ - \* /) with floating-point numbers [DONE]
- It must be possible to update calculator's name live [DONE]
- Calculator's state must be reset, when it's name is changed [DONE]

- Every calculator button should be mapped from characters array and render it's symbol using children
- Every calculator button should have lightgray color and pointer cursor when hovered; gray color when active [DONE] (i mean its not grey but looks good doe :D)

- Would be nice if you used React hooks and Functional Components [DONE]
- Would be nice to have typescript interfaces for all props and typescript type for CalculationActions [DONE]
- Would be nice to have scss syntax used for styling [DONE]

P.S. You are free to refactor existing code, change the design or add any new features! And remember - quality over quantity! Good luck :)

## Needs fixing:

- would be cool to combine all button types into one button and change it based on its type
- add minus functionality
- create favicon
- update readme after project is done (create a great looking readme that many projects have, add photos, features, etc.)
- when in smaller screen the height is too large
- PWA

## Making it better

- All the numbers that are used and aren't clear what they mean, should be in a const
- All of if checks should be in a const that is named on what it does
- Create a function that checks all the cases and formats the string
- For theming use Context to transfer and switch the state
- use clsx for combining classes
- In Screen component create a new component from the number div
- create a useCalculator hook and transfer all the calculation data to it
- Clean up the component folder structure, make it cleaner and with its own hooks, functions, models, etc.
- All the places where you need some time to remember what it does should be in properly named functions or variables or constants.
