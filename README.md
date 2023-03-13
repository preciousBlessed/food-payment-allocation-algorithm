# My-food-payment-allocation-algorithm

An algorithm to determine the amount of money a person must pay for food if he/she will spend 'n' number of days away from the hostel per month.

# How it works

This algorithm works based on a probabilistic estimation of likelihood that a person will be absent for certain number of days per month. For now, the probabilities are estimated by a (precise) decisive guess, no existing model was used to model the probabilities. The user of this application will give the following information (parameters) to receive the bill allocated for his/her feeding per month:

- The number of days he/she will/might be away per month (from 0 up to the maximum day per month).
- The name of the month in question.
- A confirmation of whether the year under which the test is carried out is a leap year or not.

## Output of this Algorithm

Having received the aforementioned input parameters, the encoded algorithm determines an approximated amount that the user will pay for feeding in the hostel per month.

As the first release of this app, the application only works by interaction with the computer terminal, at the folder where the app is saved.
To run the app, with the default name, use the code snippet below:

```
node paySchedule.js
```

# Application

I created this algorithm to help the males in my hostel during our National Youth Service Program to adopt a better means of establishing our monthly bills on feeding. The idea and algorithm was very welcome, haven proved effective to replace the previous herculean mental task of deciding the amount to pay. Also, no body will feel cheated if he/she will be absent a particular number of days, since the algorithm predicts the best amount he/she will pay given the number of days he/she will be absent.

# Credits

Developed by P.T. Chukwuezi, open to contribution, corrections and modifications. Also available as an instructional material.
