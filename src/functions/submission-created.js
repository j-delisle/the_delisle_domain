require("dotenv").config();
const fetch = require("node-fetch");
const {
    BUTTONDOWN_API_KEY
} = process.env.BUTTONDOWN_API_KEY;
exports.handler = async (event) => {
    const payload = JSON.parse(event.body).payload;
    console.log(`Recieved a submission: ${payload.email}`);
    return fetch("https://api.buttondown.email/v1/subscribers", {
            method: "POST",
            headers: {
                Authorization: `Token ${BUTTONDOWN_API_KEY}`
            },
            body: JSON.stringify({
                email: payload.email,
                notes: payload.name,
            }),
        })
        .then(res => {
            console.log(res.ok);
            console.log(res.status);
            console.log(res.statusText)
            console.log(res.headers.raw());
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(`response: ${response}`)
            console.log(`Submitted to Buttondown:\n ${data}`);
        })
        .catch((error) => ({
            statusCode: 422,
            body: String(error),
        }));
};