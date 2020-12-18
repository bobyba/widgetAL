import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://payment.yandex.net/api/v3/payments/",
  headers: {
    "Idempotence-Key": "12312412",
    "Content-Type": "application/json",
  },
  auth: {
    user: "685759",
    password: "test_tQQEHIhm6NHq5Epmdf7ZTYlyUAFHHKghL4UVCM46YF4",
  },
});

export const payAPI = {
  async checkout() {
    ;
    let response = await instance.post("", {
      amount: {
        value: "100.00",
        currency: "RUB",
      },
      capture: true,
      confirmation: {
        type: "redirect",
        return_url: "https://localhost:3000",
      },
      description: "Заказ №1",
    });
    if (response) {
      ;
    }
    return response.data;
  },
};

const instanceIMBD = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

export const apiIMBD = {
  async getFilm(film) {
    ;
    let response = await instanceIMBD.get(`?t=${film}&apikey=d04bb01c`);
    return response.data;
  },
};


