import Stripe from 'stripe';
export default defineEventHandler( async (event) => {
    const stripe = new Stripe(process.env.VUE_APP_STRIPE_SECRET_KEY);
    try {
        const body = await readBody(event)
        // Create Checkout Sessions from body params.
        const priceCode = body.body.priceCode

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: `${priceCode}`,
                    quantity: 1 // prix de votre produit / commande// devise
                },
            ],
            mode: 'payment',
            success_url: `/`,
            cancel_url: `/`,
        });
        console.log('Payment successful:', session)
        return session

    } catch (error) {
        console.error('Error processing payment:', error)
    }
})
