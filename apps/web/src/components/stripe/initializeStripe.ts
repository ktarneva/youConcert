import { Stripe, loadStripe } from '@stripe/stripe-js';
let stripePromise : Stripe | null;
const initializeStripe = async()=>{
    if(!stripePromise){

        stripePromise = await loadStripe('pk_test_51N2KMQFvvllEcMk0Jrhnw6aQhF1eMFimSQPwFZ3oUwQBplikFsjiKHx9PCLgFNHbztY4yEYOXBjJlVVgrhpbMrjO00LWGYkDvy');
    }
    return stripePromise;
};
export default initializeStripe;