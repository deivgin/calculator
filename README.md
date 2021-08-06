# calculator app

App whose purpose is to practice react and typescript

## Requirements:

- It must be possible to perform basic calculations (+ - \* /) with floating-point numbers
- It must be possible to update calculator's name live
- Calculator's state must be reset, when it's name is changed

- Every calculator button should be mapped from characters array and render it's symbol using children
- Every calculator button should have lightgray color and pointer cursor when hovered; gray color when active

- Would be nice if you used React hooks and Functional Components
- Would be nice to have typescript interfaces for all props and typescript type for CalculationActions
- Would be nice to have scss syntax used for styling

P.S. You are free to refactor existing code, change the design or add any new features! And remember - quality over quantity! Good luck :)

## Needs fixing:

- Grid system is wack, beed to make it look like an actual pad
- Create overflow check to hide numbers when they leave screen's box;
- when pressing 0 on initialState nothing happens
- after pressing /\*-+ second time it should automatically start a new calc line (prevNum + )
- add responsive design( that in mobile view it takes 100% of screen width)
- add type to button function (onClick)
