const baseUrl = 'http://localhost:3333'

export async function baseRequest(url,method) {
  const token  = window.localStorage.getItem('authToken')
  const options = {
    method,
    headers : {
      token
    }
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


