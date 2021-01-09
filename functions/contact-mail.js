require('dotenv').config()
const {
    MAILGUN_API_KEY,
    MAILGUN_DOMAIN,
    MG_HOST,
    TO_EMAIL_ADDRESS,
} = process.env
const mailgun = require('mailgun-js')({
    apiKey: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
    url: MG_HOST,
})

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
            headers: { Allow: 'POST' },
        }
    }

    const data = JSON.parse(event.body)

    if (!data.message || !data.name || !data.email || !data.subject) {
        return {
            statusCode: 422,
            body: 'Name, email, and message are required.',
        }
    }

    const mailgunData = {
        from: data.email,
        to: 'uros.mahne@gmail.com',
        'h:Reply-To': data.email,
        subject: `${data.subject} by ${data.name}`,
        html: `
        <h4> Email from ${data.name} ${data.email} </h4>
        <p> ${data.message}</p>
        `,
    }

    try {
        await mailgun.messages().send(mailgunData)

        return {
            statusCode: 200,
            body: 'Your message was sent successfully!',
        }
    } catch (error) {
        return {
            statusCode: 422,
            body: `Error: ${error}`,
        }
    }
}
