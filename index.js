var o = require('ass-js/x86/operand');
var Code = require('ass-js/x86/x64/code').Code;
require('static-buffer/arraybuffer');
var StaticBuffer = require('static-buffer/buffer').StaticBuffer;


/*
function createCpuidSbuf() {
    var _ = Code.create();

    _.push(o.rbx);
    _.push(o.rcx);
    _.push(o.rdx);

    _.mov(o.eax, o.edi);
    _.mov(o.ecx, o.esi);
    _.cpuid();

    var lbl_eax = _.lbl('eax');
    _.mov(o.rip.disp(lbl_eax), o.eax);
    var lbl_ebx = _.lbl('ebx');
    _.mov(o.rip.disp(lbl_ebx), o.ebx);
    var lbl_edx = _.lbl('edx');
    _.mov(o.rip.disp(lbl_edx), o.edx);
    var lbl_ecx = _.lbl('ecx');
    _.mov(o.rip.disp(lbl_ecx), o.ecx);

    _.pop(o.rdx);
    _.pop(o.rcx);
    _.pop(o.rbx);

    _.ret();
    _.align(4);

    _.insert(lbl_eax);
    _.dd(0);
    _.insert(lbl_ebx);
    _.dd(0);
    _.insert(lbl_edx);
    _.dd(0);
    _.insert(lbl_ecx);
    _.dd(0);

    var bin = _.compile();
    // console.log(_.toString());
    // console.log('0x' + bin.map(function(b) { return b.toString(16); }).join(', 0x'));
    return StaticBuffer.from(bin, 'rwe');
}
// */

// var sbuf = createCpuidSbuf();
var bin = [0x53, 0x51, 0x52, 0x89, 0xf8, 0x89, 0xf1, 0xf, 0xa2, 0x89, 0x5, 0x19, 0x0, 0x0, 0x0, 0x89, 0x1d, 0x17, 0x0, 0x0, 0x0, 0x89, 0x15, 0x15, 0x0, 0x0, 0x0, 0x89, 0xd, 0x13, 0x0, 0x0, 0x0, 0x5a, 0x59, 0x5b, 0xc3, 0xf, 0x1f, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
var sbuf = StaticBuffer.from(bin, 'rwe');
var len = sbuf.length;


function cpuid(eax, ecx) {
    sbuf.call([eax, ecx]);
    return [
        sbuf.readInt32LE(len - 16),
        sbuf.readInt32LE(len - 12),
        sbuf.readInt32LE(len - 8),
        sbuf.readInt32LE(len - 4),
    ];
}

module.exports = cpuid;
