const queryPara=['abc','hello','wild'];
let prom=Promise.resolve([]);
queryPara.forEach(para => {
    prom = prom.then(reqsf =>{
        return fetch('http://localhost:3000/api/timer/get?${para}')
            .then(res=>{
                return res.json()
            })
            .then(res =>{
                let url = res.url;
                console.log('res from:' url);
                res
            })
    })
})
