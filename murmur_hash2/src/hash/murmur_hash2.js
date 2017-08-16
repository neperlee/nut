/**
 *
 */

/**
 * 32位无符号积运算，提高运算精度 （JS默认是有符号整数）
 */

function multiply_uint32(a, b){
    var ah = (a >> 16) & 0xffff, al = a & 0xffff;
    var bh = (b >> 16) & 0xffff, bl = b & 0xffff;
    var h = ((ah * bl) + (al * bh)) & 0xffff;

    return ((h << 16) >>> 0) + (al * bl);
}



function murmur_hash2(str){

    var h, k, l = str.length;
    var remainder = l % 4,
        bytes = l - remainder;

    var seed = 0x5bd1e995;

    h = 0 ^ l;

    var i = 0;
    while (i < bytes){
        k = str.charCodeAt(i++);
        k |= str.charCodeAt(i++) << 8;
        k |= str.charCodeAt(i++) << 16;
        k |= str.charCodeAt(i++) << 24;

        k = multiply_uint32(k, seed);
        k = (k ^ (k >>> 24)) >>> 0;
        k = multiply_uint32(k, seed);

        h = multiply_uint32(h, seed);
        h = (h ^ k) >>>0;
    }

    switch (remainder){
        case 3:
            h = (h ^ str.charCodeAt(i+2) << 16) >>> 0;
        case 2:
            h = (h ^ str.charCodeAt(i+1) << 8) >>> 0;
        case 1:
            h = h ^ str.charCodeAt(i);
            h = multiply_uint32(h, seed);
    }


    h = (h ^ (h >>> 13)) >>> 0;
    h = multiply_uint32(h, seed);
    h = (h ^ (h >>> 15)) >>> 0;
    return h;
}


/**
 * use rollup
 */
export default murmur_hash2;
