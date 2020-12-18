const functions = require("firebase-functions");
const admin = require("firebase-admin");

const yandexCheckout = require("yandex-checkout")({
  shopId: "685759",
  secretKey: "test_tQQEHIhm6NHq5Epmdf7ZTYlyUAFHHKghL4UVCM46YF4",
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions $
//

admin.initializeApp();

const db = admin.firestore();
const auth = admin.auth();

exports.checkOutYandex = functions.https.onCall((data, context) => {
  return yandexCheckout
    .createPayment(
      {
        amount: {
          value: data.data.count,
          currency: "RUB",
        },
        capture: true,
        confirmation: {
          type: "embedded",
          locale: "en_US",
        },
        description: `Заказ ${data.data.idem}`,
      },
      data.data.idem
    )
    .then((payment) => {
      const resp = { payment: payment, data: data };
      return resp;
    })
    .catch((err) => {
      const resp = { err: err, data: data };
      return resp;
    });
});
