import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStrip = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEYS}`)
    }

    return stripePromise;

}

export default getStrip