// covid temperature test

function testCovid(temp){
    let results;
    if (temp <=33){
        result = 'Normal temperature';
    }
    else if(temp ==35){
        result = 'please watch your temperature';
}

return result;
}

console.log(testCovid(+2));
