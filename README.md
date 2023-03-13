# My-food-payment-allocation-algorithm

An algorithm to determine the amount of money a person must pay for food if he/she will spend 'n' number of days at the hostel per month.

# How it works

This algorithm works based on a probabilistic estimation of likelihood that a person will be present for certain number of days per month. For now, the probabilities are estimated by a decisive guess, no existing model was used to model the probabilities. The user of this application will give the following information to receive the bill allocated for his/her feeding per month:

- The number of days he/she will/might be away per month (from 0 up to the maximum day per month).
- The name of the month in question.
- A confirmation of whether the year under which the test is carried out is a leap year or not.

As the first release of this app, the application only works by interation with the computer terminal, at the folder where the app is saved.
To run the app, with the default name, use the code snippet below:

```
node paySchedule.js
```

# Credits

Developed by P.T. Chukwuezi, open to contribution, corrections and modifications. Also available as an instructional material.
