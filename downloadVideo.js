// netlify-functions/downloadVideo.js
const { processUrl } = require('./yourPythonScript'); // Import your Python script logic

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const requestBody = JSON.parse(event.body);
    const userProvidedUrl = requestBody.url;

    const filePath = processUrl(userProvidedUrl); // Replace with your Python script logic

    if (filePath) {
      return { statusCode: 200, body: `Download complete. File saved to: ${filePath}` };
    } else {
      return { statusCode: 500, body: 'Failed to download the video.' };
    }
  } catch (error) {
    console.error('Error:', error); // Log the error details
    return { statusCode: 500, body: `Internal Server Error: ${error.message}` };
  }
};
