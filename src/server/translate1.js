const axios=require('axios')
fetch(
  `https://translate.googleapis.com/translate_a/single?client=gtx&\
sl=en&tl=kn&dt=t&q=hello`
)
.then((res)=>res.json())
.then((result)=>{return result[0][0][0]})