




// api endpoint:
// CS490, public api:

// Run js script with Node.js, prevents CORS issues.
// fetch is included in Node 18 or later.



const endpoint = 'https://student-info-api.netlify.app/.netlify/functions/submit_student_info';



//payload format, json type:

const payload = {

  };


// need to send a POST request to the api.

fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(payload)

  })
  .then(res => res.json())
  .then(data => console.log(data));









