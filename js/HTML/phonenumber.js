str="maddilisushmitha@gmail.com";
console.log( str.match(/^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.])*$/))



str="9966113399";
console.log(str.match(/[0-9]\S*/g));

str="aaAA!";
console.log(str.match(/[a-zA-Z0-9]*!/g))


str="sushmitha";
console.log(str.match(/\w+/));