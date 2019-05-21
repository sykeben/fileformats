//////////////////////////////
// NAPNG TEST VIEWER SCRIPT //
//////////////////////////////

const rawdata = "4E41504E4730313030303050303030303030313535383631363733333030303030303030303030303030303048414E444D4144452B2B2B2B2B2B2B2B3F3F3F3F3F3F3F3F3F3F3F3F3F3F3F3F30303030303031393830303031303089504E470D0A1A0A0000000D494844520000001000000010080200000090916836000000017352474200AECE1CE90000000467414D410000B18F0BFC6105000000097048597300000EC300000EC301C76FA8640000005B49444154384FD58C491200210803FDFFA7110DB2B87BB4AB4607D23151240D48D008F31833DD5286FAD6C4063EB5027E5684C2D106D0F8BCB299E70253ECAF0B30EB77D7B1820E1B54B0C2A6E3D320F9004C36723B200159294419172F79A3D42EC80B0000000049454E44AE42608230303030303032333430303031303089504E470D0A1A0A0000000D494844520000001000000010080200000090916836000000017352474200AECE1CE90000000467414D410000B18F0BFC6105000000097048597300000EC300000EC301C76FA8640000007F49444154384FBD92411280200C0329FFE2F53C0CE3A440A08EA31EDC03189B14AD5A6B2D0966E6579DDDA01AEE5AAB8B4E2965F150B071741364B0BA7304869B65A237676073B3406229DFB801A41E08B2EF576E3232E88BEE33F0903F037C4417C2988A4F49E710333A43F2E9C39DDBDB5F83C4985AC91220FA1A7B35A50346C17AFDE20F73700000000049454E44AE42608230303030303032353530303031303089504E470D0A1A0A0000000D494844520000001000000010080200000090916836000000017352474200AECE1CE90000000467414D410000B18F0BFC6105000000097048597300000EC300000EC301C76FA8640000009449444154384F9D915B0EC3200C04817B717A0E46B719E22CA652A4CE07F8B16B20A973CE62D45A577493059E4B3DC658C94DEF7DD39030F854833C5A97320CA1A60D5E7C0C494D03CE56FBA956512850EA078AB6F65DAD112279A83C06404D1C1E271B5EC906BF745CD2D93EBF3F43AB3F29BACD47C6A555140AFC49F0D78FFB6ED7E0342C60C46680D3E652D80C800D72B7940FADA798457BC55A190000000049454E44AE42608230303030303032363530303031303089504E470D0A1A0A0000000D494844520000001000000010080200000090916836000000017352474200AECE1CE90000000467414D410000B18F0BFC6105000000097048597300000EC300000EC301C76FA8640000009E49444154384F9D92510EC3200C4349EFC5E93918337D9581D069D2DE474AB01D50DB28A5F4DE552162ECAC2435D453E95B6B68A6D66A7598DDA89E6E5046F5719EB39161DD9C81E4468053BA5EDDDA145AA85D0F14D7F3DCDD1A2152869D1900DC7208675672E02739C005C685EE73B8E4CAF6FAEDF0ED596340BD18A95E48B0556861B7F9EBC38DC73D380D338C9801B9BFC5362B3F9F7B430CB214F101E528AA4BD49085470000000049454E44AE42608230303030303032363230303031303089504E470D0A1A0A0000000D49484452000000100000001008060000001FF3FF61000000017352474200AECE1CE90000000467414D410000B18F0BFC6105000000097048597300000EC200000EC20115284A800000009B49444154384FAD92010AC4200C04D57FF97A1FD6BB2DCE11D77850E880D46A76A2A5F5FA528C5AEB9CAD24A56513283CC6986F2BBDF74DF213D0F514064904A24510C31482EF2D822C4C019C6ADABFB0F63484D6FC54A2CDE78D8725D6C824AC2F02200C51E2A48227A402BF6FBC9AA3735DF1B8FE1D847F17415DF36EF1BEDACBC291777EA47B32BB665D228837019C441E844D0088202F2BE5033671A23B0A71CE2D0000000049454E44AE42608230303030303032343330303031303089504E470D0A1A0A0000000D49484452000000100000001008060000001FF3FF61000000017352474200AECE1CE90000000467414D410000B18F0BFC6105000000097048597300000EC200000EC20115284A800000008849444154384FCD924B0E80300805C17BF5F43D984AC36BF826C6B87036B6CA1B94CAE70D059859579EA2949240C2734EDD79C61849B205E8DA85814804889CC0865108E23327A8C228005DCDF1242CC8BDF856C2A1D745170656224DA5B913BCE167027C57871DF83E8538DD4E124F0B7CF323AD8576ADBA58204E02D089621024018873A8CB882E099883F416A6F01A0000000049454E44AE426082"

function read(from, to) {
    return rawdata.substr(from * 2, (to - from) * 2)
}

function sub(from, length) {
    return rawdata.substr(from * 2, length * 2)
}

function hex2a(hexx) {
    var hex = hexx.toString()
    var str = ''
    for (var i = 0;
        (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
    return str
}

if (!window.atob) {
    var tableStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var table = tableStr.split("");

    window.atob = function (base64) {
        if (/(=[^=]+|={3,})$/.test(base64)) throw new Error("String contains an invalid character");
        base64 = base64.replace(/=/g, "");
        var n = base64.length & 3;
        if (n === 1) throw new Error("String contains an invalid character");
        for (var i = 0, j = 0, len = base64.length / 4, bin = []; i < len; ++i) {
            var a = tableStr.indexOf(base64[j++] || "A"),
                b = tableStr.indexOf(base64[j++] || "A");
            var c = tableStr.indexOf(base64[j++] || "A"),
                d = tableStr.indexOf(base64[j++] || "A");
            if ((a | b | c | d) < 0) throw new Error("String contains an invalid character");
            bin[bin.length] = ((a << 2) | (b >> 4)) & 255;
            bin[bin.length] = ((b << 4) | (c >> 2)) & 255;
            bin[bin.length] = ((c << 6) | d) & 255;
        };
        return String.fromCharCode.apply(null, bin).substr(0, bin.length + n - 4);
    };

    window.btoa = function (bin) {
        for (var i = 0, j = 0, len = bin.length / 3, base64 = []; i < len; ++i) {
            var a = bin.charCodeAt(j++),
                b = bin.charCodeAt(j++),
                c = bin.charCodeAt(j++);
            if ((a | b | c) > 255) throw new Error("String contains an invalid character");
            base64[base64.length] = table[a >> 2] + table[((a << 4) & 63) | (b >> 4)] +
                (isNaN(b) ? "=" : table[((b << 2) & 63) | (c >> 6)]) +
                (isNaN(b + c) ? "=" : table[c & 63]);
        }
        return base64.join("");
    };

}

function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null,
        str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}

function base64ToHex(str) {
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
        var tmp = bin.charCodeAt(i).toString(16);
        if (tmp.length === 1) tmp = "0" + tmp;
        hex[hex.length] = tmp;
    }
    return hex.join(" ");
}

function print(text) {
    document.getElementById("log").innerHTML += `<br>${text}`
}

function printcolor(text, color) {
    print(`<span style="color: ${color};">${text}</span>`)
}

var frame = -1
function frameplay() {

    frame++
    if (frame >= framedata.length) frame = 0

    document.getElementById('framenumber').innerHTML = frame

    document.getElementById("viewer").src = `data:image/png;base64,${hexToBase64(sub(framedata[frame].start, framedata[frame].dist))}`
    setTimeout(frameplay, framedata[frame].time)

}

if (hex2a(read(0, 5)) == "NAPNG") printcolor(`Filetype confirmed as NAPNG version ${hex2a(read(5,7))}.${hex2a(read(7,9))}.${hex2a(read(9,11))} with compression type "${hex2a(read(11,12))}"`, 'red')
else printcolor("Unknown filetype, things may break!", 'red')

if (hex2a(read(12,28)) == '0000000000000000') printcolor("File was never created?", 'green')
else printcolor(`File created ${new Date(parseInt(hex2a(read(12,28)))).toLocaleString()} by application "${hex2a(read(44,60)).replace(/\+/g, "")}"`, 'green')

if (hex2a(read(28,44)) == '0000000000000000') printcolor("File has never been edited.", 'green')
else printcolor(`File edited ${new Date(parseInt(hex2a(read(28,44)))).toLocaleString()} by application "${hex2a(read(60,76)).replace(/\+/g, "")}"`, 'green')

var address = 76
var framedata = []
var x = -1
while (address < rawdata.length/2) {

    x++
    framedata[x] = {}

    framedata[x].start = address+15
    framedata[x].dist = parseInt(hex2a(read(address, address+9)))
    framedata[x].time = parseInt(hex2a(read(address+10, address+15)))

    printcolor(`Frame ${x} starts at byte ${framedata[x].start}, is ${framedata[x].dist} bytes long, and displays for ${framedata[x].time}ms.`, 'blue')

    address += (15 + framedata[x].dist)

    document.getElementById('framecount').innerHTML = x
}

setTimeout(frameplay, 500)