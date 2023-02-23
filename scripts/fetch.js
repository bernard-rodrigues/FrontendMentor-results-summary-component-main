fetch('../public/data.json')
    .then(response => response.json())
    .then(data => {
        $('#reaction-container img').attr('src', data[0].icon);
        $('#reaction').text(data[0].category);
        $('#reaction-container .score span:first-child').text(data[0].score);

        $('#memory-container img').attr('src', data[1].icon);
        $('#memory').text(data[1].category);
        $('#memory-container .score span:first-child').text(data[1].score);

        $('#verbal-container img').attr('src', data[2].icon);
        $('#verbal').text(data[2].category);
        $('#verbal-container .score span:first-child').text(data[2].score);

        $('#visual-container img').attr('src', data[3].icon);
        $('#visual').text(data[3].category);
        $('#visual-container .score span:first-child').text(data[3].score);

        const add = (accumulator, currentValue) => accumulator + currentValue
        
        $('#score h1').text(
            Math.floor(data.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0)/data.length)
        )
    })