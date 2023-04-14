const c = 0.9
toxicity.load(c).then(model => {
    const text = document.getElementById('p')
    const form = document.getElementById('form')
    
    form.addEventListener('submit', event => {
        event.preventDefault()
        const p = text.value


        model.classify(p).then(predictions => {
            const mE = []
            const has = document.getElementById('has')

            predictions.forEach(element => {
                if (element.results[0].match === true) { 
                    mE.push(element)
                    has.innerText = 'Answer is/has:'
                }

                else {
                    has.innerText = 'Answer is clean.'
                }
            });
            const ans = document.getElementById('ans')
            mE.forEach(label => {
                const lab = document.createElement('p')
                lab.innerText = label.label
                ans.appendChild(lab)
            })
        })
    })


})