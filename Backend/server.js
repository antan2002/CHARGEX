const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PcYpi2LKqrtXGE7rCWRHkRWwJfZY2lIboUBiymMwcVMSAXmLR9r6kQRsfF8tm8MiMXDPl1vDfqXjZLrIzq9VseR00ZZ0c5qG8");

app.use(express.json());
app.use(cors());

// Checkout API
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.name,
            },
            unit_amount: product.price * 100,
        },
        quantity: product.quantity,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(7000, () => {
    console.log("Server starts on port 7000");
});
