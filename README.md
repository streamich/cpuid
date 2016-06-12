# cpuid

Execute any x86 `cpuid` call. You pass two arguments: `eax` and `ecx` register values and get back a response
of 4 numbers in an array, the response returned as an array `[eax, ebx, edx, ecx]`.

Example, when you execute `0, 0` call Intel returns `GenuineIntel` string
in last three registers:

```js
var cpuid = require('cpuid');
var temp = cpuid(0, 0);
console.log(temp); // [ 13, 1970169159, 1231384169, 1818588270 ]
```

Now let's create a string out of that:

```js
var str = '';
for(var i = 1; i < temp.length; i++) {
    var reg = temp[i];
    str += String.fromCharCode(reg & 0xFF);
    str += String.fromCharCode((reg >> 8) & 0xFF);
    str += String.fromCharCode((reg >> 16) & 0xFF);
    str += String.fromCharCode((reg >> 24) & 0xFF);
}
console.log(str); // GenuineIntel
```

If you run under some virtual machine, those usually use `0x40000000` address
to return their name:

```js
temp = cpuid(0x40000000, 0);
var str = '';
for(var i = 0; i < temp.length; i++) {
    var reg = temp[i];
    str += String.fromCharCode(reg & 0xFF);
    str += String.fromCharCode((reg >> 8) & 0xFF);
    str += String.fromCharCode((reg >> 16) & 0xFF);
    str += String.fromCharCode((reg >> 24) & 0xFF);
}
console.log(str); // @VBoxVBoxVBox
```
