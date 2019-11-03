// `const` is a signal that the identifier won’t be reassigned.

const apiData = {
  url: 'https://content.guardianapis.com/search?',
  type: 'tag=environment/environment&from-date=2019-01-01&format=json',
  fields: '&show-fields=headline,thumbnail,short-url',
  apiKey: '&api-key=1d54906f-4738-4c2c-a728-b25a32f49f0f'

}

// The destructuring assignment syntax is a JavaScript expression that makes it 
// possible to unpack values from arrays, or properties from objects, into distinct variables.
const {url, type, fields, apiKey} = apiData

// backticks signify ES6 template literal, which are string literals allowing embedded expressions.
const apiUrl = `${url}${type}${fields}${apiKey}`

fetch(apiUrl)
      //fetch will return a Promise which holds data for you to use later
      //.json turns data into an object
    .then( (data) => data.json() )
      // convert promise into data you are going to use
    .then( (data) => generateHtml(data) )


const generateHtml = (data) => {
  console.log(data)
  const html = `
    <div class="headline1">${data.response.results[0].fields.headline}</div>
    <img src="${data.response.results[0].fields.thumbnail}">
    `
const headline1Div = document.querySelector('.headline1')
headline1Div.innerHTML = html

}