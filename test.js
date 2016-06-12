var cpuid = require('./index');


var temp = cpuid(0, 0);
console.log(temp);
var str = '';
for(var i = 1; i < temp.length; i++) {
    var reg = temp[i];
    str += String.fromCharCode(reg & 0xFF);
    str += String.fromCharCode((reg >> 8) & 0xFF);
    str += String.fromCharCode((reg >> 16) & 0xFF);
    str += String.fromCharCode((reg >> 24) & 0xFF);
}
console.log(str);


temp = cpuid(0x40000000, 0);
var str = '';
for(var i = 0; i < temp.length; i++) {
    var reg = temp[i];
    str += String.fromCharCode(reg & 0xFF);
    str += String.fromCharCode((reg >> 8) & 0xFF);
    str += String.fromCharCode((reg >> 16) & 0xFF);
    str += String.fromCharCode((reg >> 24) & 0xFF);
}
console.log(str);


temp = cpuid(0x40000000, 0);
var str = '';
for(var i = 0; i < temp.length; i++) {
    var reg = temp[i];
    str += String.fromCharCode(reg & 0xFF);
    str += String.fromCharCode((reg >> 8) & 0xFF);
    str += String.fromCharCode((reg >> 16) & 0xFF);
    str += String.fromCharCode((reg >> 24) & 0xFF);
}
console.log(str);
