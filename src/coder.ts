
//字符串转utf-8
export function ToUint8Arr(str: string) {
    const buffer: number[] = []
    for (let i of str) {
        const _code: number = i.charCodeAt(0)
        if (_code < 0x80) {
            buffer.push(_code)
        } else if (_code < 0x800) {
            buffer.push(0xc0 + (_code >> 6))
            buffer.push(0x80 + (_code & 0x3f))
        } else if (_code < 0x10000) {
            buffer.push(0xe0 + (_code >> 12))
            buffer.push(0x80 + ((_code >> 6) & 0x3f))
            buffer.push(0x80 + (_code & 0x3f))
        }
    }
    return Uint8Array.from(buffer)
}

//utf-8转字符串
export function Utf8ArrayToStr(array: Uint8Array) {
    var out: string, i: number, len: number, c: number
    var char2: number, char3: number

    out = ''
    len = array.length
    i = 0
    while (i < len) {
        c = array[i++]
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c)
                break
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++]
                out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f))
                break
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++]
                char3 = array[i++]
                out += String.fromCharCode(
                    ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
                )
                break
        }
    }
    return out
}

export function encodeWS(message: Uint8Array) {
    let sum32 = 0
    for (let i = 0; i < message.length; i++) {
        if (message[i] == 32 || message[i] == 10) {
            sum32++
        }
    }

    if (sum32 == 0) {
        return message
    }
    let dst = new Uint8Array(message.length + sum32)
    let target = 0;
    for (let i = 0; i < message.length; i++) {
        let v = message[i]
        switch (v) {
            case 10:
                dst[target] = 32
                dst[target + 1] = 1
                target += 2
                break
            case 32:
                dst[target] = 32
                dst[target + 1] = 2
                target += 2
                break
            default:
                dst[target] = v
                target++
                break
        }
    }
    return dst
}

export function decodeWS(message: Uint8Array) {
    let sum32 = 0
    for (let i = 0; i < message.length; i++) {
        let v = message[i]
        if (v == 32 || v == 10) {
            sum32++
        }
    }
    if (sum32 == 0) {
        return message
    }
    let dst = new Uint8Array(message.length - sum32)
    let jump = false
    let target = 0
    for (let i = 0; i < message.length; i++) {
        let v = message[i]
        if (jump) {
            if (v == 1) {
                dst[target] = 10
            } else {
                dst[target] = 32
            }
            jump = false
            target++
        } else {
            if (v == 32) {
                jump = true
            } else {
                dst[target] = v
                target++
            }
        }
    }

    return dst
}