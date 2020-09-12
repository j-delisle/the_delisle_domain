require("dotenv").config();
const fetch = require("node-fetch");
const {
    EMAIL_TOKEN
} = process.env.BUTTONDOWN_API_KEY;
exports.handler = async (event) => {
    const payload = JSON.parse(event.body).payload;
    console.log(`Recieved a submission: ${payload.email}`);
    return fetch("https://api.buttondown.email/v1/subscribers", {
            method: "POST",
            headers: {
                Authorization: `Token ${EMAIL_TOKEN}`
            },
            body: JSON.stringify({
                email: payload.email,
                notes: payload.name,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(`Submitted to Buttondown:\n ${data}`);
        })
        .catch((error) => ({
            statusCode: 422,
            body: String(error),
        }));
};