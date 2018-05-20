const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
<<<<<<< HEAD
    req.user.credits = +5;
    const user = await req.user.save();
=======
    req.user.credits += 5;
    const user = await req.user.save();

>>>>>>> 0dc95893d7456011edf702ed84a7eefb65c51744
    res.send(user);
  });
};
