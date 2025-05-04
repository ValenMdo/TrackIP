const OPTIONS = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': "TU_API_KEY","
          'x-rapidapi-host': 'ip-geo-location10.p.rapidapi.com'
    }
  };
  
  const fetchIpInfo = ip => {
    return fetch(`https://ip-geo-location10.p.rapidapi.com/ip?ip=${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(err))
  }
  
  const form = document.querySelector("#form")
  const input = document.querySelector("#input")
  const submit = document.querySelector("#submit")
  const results = document.querySelector("#results")
  
  form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const {value} = input
    if(!value) return
  
    submit.setAttribute("disabled","")
    submit.setAttribute("aria-busy","true")
  
    const ipInfo = await fetchIpInfo(value)
  
    if(ipInfo){
      results.innerHTML = JSON.stringify(ipInfo,null,2)
    }
  
    submit.removeAttribute("disabled")
    submit.removeAttribute("aria-busy")
  })