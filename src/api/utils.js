const baseUrl = 'https://immense-everglades-27398.herokuapp.com'

export async function baseRequest(url,method,responseData) {
  const token  = window.localStorage.getItem('authToken')
  let options = {
    method,
    headers : {
      'Content-Type': 'application/json',
      token,
    },
  }

  if (method === "POST") {
    options.body = JSON.stringify(responseData)
  }
  let data;

  const response = await fetch(`${baseUrl}${url}`,options)

  if (response.ok) {
    data = await response.json()
  }else {
    throw response.status
  }
  
  
  return data;
}


