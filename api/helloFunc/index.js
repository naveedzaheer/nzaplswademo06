module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = "Hello from Azure Power Lunch";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            text: responseMessage
        }
    };
}