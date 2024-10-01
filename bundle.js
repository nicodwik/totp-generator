(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/jssha/dist/sha.js
  var require_sha = __commonJS({
    "node_modules/jssha/dist/sha.js"(exports, module) {
      !function(n, r) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (n = "undefined" != typeof globalThis ? globalThis : n || self).jsSHA = r();
      }(exports, function() {
        "use strict";
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "ARRAYBUFFER not supported by this environment", t = "UINT8ARRAY not supported by this environment";
        function e(n2, r2, t2, e2) {
          var i2, o2, u2, f2 = r2 || [0], s2 = (t2 = t2 || 0) >>> 3, w2 = -1 === e2 ? 3 : 0;
          for (i2 = 0; i2 < n2.length; i2 += 1) o2 = (u2 = i2 + s2) >>> 2, f2.length <= o2 && f2.push(0), f2[o2] |= n2[i2] << 8 * (w2 + e2 * (u2 % 4));
          return { value: f2, binLen: 8 * n2.length + t2 };
        }
        function i(i2, o2, u2) {
          switch (o2) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
              break;
            default:
              throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE");
          }
          switch (i2) {
            case "HEX":
              return function(n2, r2, t2) {
                return function(n3, r3, t3, e2) {
                  var i3, o3, u3, f2;
                  if (0 != n3.length % 2) throw new Error("String of HEX type must be in byte increments");
                  var s2 = r3 || [0], w2 = (t3 = t3 || 0) >>> 3, a2 = -1 === e2 ? 3 : 0;
                  for (i3 = 0; i3 < n3.length; i3 += 2) {
                    if (o3 = parseInt(n3.substr(i3, 2), 16), isNaN(o3)) throw new Error("String of HEX type contains invalid characters");
                    for (u3 = (f2 = (i3 >>> 1) + w2) >>> 2; s2.length <= u3; ) s2.push(0);
                    s2[u3] |= o3 << 8 * (a2 + e2 * (f2 % 4));
                  }
                  return { value: s2, binLen: 4 * n3.length + t3 };
                }(n2, r2, t2, u2);
              };
            case "TEXT":
              return function(n2, r2, t2) {
                return function(n3, r3, t3, e2, i3) {
                  var o3, u3, f2, s2, w2, a2, h2, c2, v2 = 0, A2 = t3 || [0], E2 = (e2 = e2 || 0) >>> 3;
                  if ("UTF8" === r3) for (h2 = -1 === i3 ? 3 : 0, f2 = 0; f2 < n3.length; f2 += 1) for (u3 = [], 128 > (o3 = n3.charCodeAt(f2)) ? u3.push(o3) : 2048 > o3 ? (u3.push(192 | o3 >>> 6), u3.push(128 | 63 & o3)) : 55296 > o3 || 57344 <= o3 ? u3.push(224 | o3 >>> 12, 128 | o3 >>> 6 & 63, 128 | 63 & o3) : (f2 += 1, o3 = 65536 + ((1023 & o3) << 10 | 1023 & n3.charCodeAt(f2)), u3.push(240 | o3 >>> 18, 128 | o3 >>> 12 & 63, 128 | o3 >>> 6 & 63, 128 | 63 & o3)), s2 = 0; s2 < u3.length; s2 += 1) {
                    for (w2 = (a2 = v2 + E2) >>> 2; A2.length <= w2; ) A2.push(0);
                    A2[w2] |= u3[s2] << 8 * (h2 + i3 * (a2 % 4)), v2 += 1;
                  }
                  else for (h2 = -1 === i3 ? 2 : 0, c2 = "UTF16LE" === r3 && 1 !== i3 || "UTF16LE" !== r3 && 1 === i3, f2 = 0; f2 < n3.length; f2 += 1) {
                    for (o3 = n3.charCodeAt(f2), true === c2 && (o3 = (s2 = 255 & o3) << 8 | o3 >>> 8), w2 = (a2 = v2 + E2) >>> 2; A2.length <= w2; ) A2.push(0);
                    A2[w2] |= o3 << 8 * (h2 + i3 * (a2 % 4)), v2 += 2;
                  }
                  return { value: A2, binLen: 8 * v2 + e2 };
                }(n2, o2, r2, t2, u2);
              };
            case "B64":
              return function(r2, t2, e2) {
                return function(r3, t3, e3, i3) {
                  var o3, u3, f2, s2, w2, a2, h2 = 0, c2 = t3 || [0], v2 = (e3 = e3 || 0) >>> 3, A2 = -1 === i3 ? 3 : 0, E2 = r3.indexOf("=");
                  if (-1 === r3.search(/^[a-zA-Z0-9=+/]+$/)) throw new Error("Invalid character in base-64 string");
                  if (r3 = r3.replace(/=/g, ""), -1 !== E2 && E2 < r3.length) throw new Error("Invalid '=' found in base-64 string");
                  for (o3 = 0; o3 < r3.length; o3 += 4) {
                    for (s2 = r3.substr(o3, 4), f2 = 0, u3 = 0; u3 < s2.length; u3 += 1) f2 |= n.indexOf(s2.charAt(u3)) << 18 - 6 * u3;
                    for (u3 = 0; u3 < s2.length - 1; u3 += 1) {
                      for (w2 = (a2 = h2 + v2) >>> 2; c2.length <= w2; ) c2.push(0);
                      c2[w2] |= (f2 >>> 16 - 8 * u3 & 255) << 8 * (A2 + i3 * (a2 % 4)), h2 += 1;
                    }
                  }
                  return { value: c2, binLen: 8 * h2 + e3 };
                }(r2, t2, e2, u2);
              };
            case "BYTES":
              return function(n2, r2, t2) {
                return function(n3, r3, t3, e2) {
                  var i3, o3, u3, f2, s2 = r3 || [0], w2 = (t3 = t3 || 0) >>> 3, a2 = -1 === e2 ? 3 : 0;
                  for (o3 = 0; o3 < n3.length; o3 += 1) i3 = n3.charCodeAt(o3), u3 = (f2 = o3 + w2) >>> 2, s2.length <= u3 && s2.push(0), s2[u3] |= i3 << 8 * (a2 + e2 * (f2 % 4));
                  return { value: s2, binLen: 8 * n3.length + t3 };
                }(n2, r2, t2, u2);
              };
            case "ARRAYBUFFER":
              try {
                new ArrayBuffer(0);
              } catch (n2) {
                throw new Error(r);
              }
              return function(n2, r2, t2) {
                return function(n3, r3, t3, i3) {
                  return e(new Uint8Array(n3), r3, t3, i3);
                }(n2, r2, t2, u2);
              };
            case "UINT8ARRAY":
              try {
                new Uint8Array(0);
              } catch (n2) {
                throw new Error(t);
              }
              return function(n2, r2, t2) {
                return e(n2, r2, t2, u2);
              };
            default:
              throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
          }
        }
        function o(e2, i2, o2, u2) {
          switch (e2) {
            case "HEX":
              return function(n2) {
                return function(n3, r2, t2, e3) {
                  var i3, o3, u3 = "0123456789abcdef", f2 = "", s2 = r2 / 8, w2 = -1 === t2 ? 3 : 0;
                  for (i3 = 0; i3 < s2; i3 += 1) o3 = n3[i3 >>> 2] >>> 8 * (w2 + t2 * (i3 % 4)), f2 += u3.charAt(o3 >>> 4 & 15) + u3.charAt(15 & o3);
                  return e3.outputUpper ? f2.toUpperCase() : f2;
                }(n2, i2, o2, u2);
              };
            case "B64":
              return function(r2) {
                return function(r3, t2, e3, i3) {
                  var o3, u3, f2, s2, w2, a2 = "", h2 = t2 / 8, c2 = -1 === e3 ? 3 : 0;
                  for (o3 = 0; o3 < h2; o3 += 3) for (s2 = o3 + 1 < h2 ? r3[o3 + 1 >>> 2] : 0, w2 = o3 + 2 < h2 ? r3[o3 + 2 >>> 2] : 0, f2 = (r3[o3 >>> 2] >>> 8 * (c2 + e3 * (o3 % 4)) & 255) << 16 | (s2 >>> 8 * (c2 + e3 * ((o3 + 1) % 4)) & 255) << 8 | w2 >>> 8 * (c2 + e3 * ((o3 + 2) % 4)) & 255, u3 = 0; u3 < 4; u3 += 1) a2 += 8 * o3 + 6 * u3 <= t2 ? n.charAt(f2 >>> 6 * (3 - u3) & 63) : i3.b64Pad;
                  return a2;
                }(r2, i2, o2, u2);
              };
            case "BYTES":
              return function(n2) {
                return function(n3, r2, t2) {
                  var e3, i3, o3 = "", u3 = r2 / 8, f2 = -1 === t2 ? 3 : 0;
                  for (e3 = 0; e3 < u3; e3 += 1) i3 = n3[e3 >>> 2] >>> 8 * (f2 + t2 * (e3 % 4)) & 255, o3 += String.fromCharCode(i3);
                  return o3;
                }(n2, i2, o2);
              };
            case "ARRAYBUFFER":
              try {
                new ArrayBuffer(0);
              } catch (n2) {
                throw new Error(r);
              }
              return function(n2) {
                return function(n3, r2, t2) {
                  var e3, i3 = r2 / 8, o3 = new ArrayBuffer(i3), u3 = new Uint8Array(o3), f2 = -1 === t2 ? 3 : 0;
                  for (e3 = 0; e3 < i3; e3 += 1) u3[e3] = n3[e3 >>> 2] >>> 8 * (f2 + t2 * (e3 % 4)) & 255;
                  return o3;
                }(n2, i2, o2);
              };
            case "UINT8ARRAY":
              try {
                new Uint8Array(0);
              } catch (n2) {
                throw new Error(t);
              }
              return function(n2) {
                return function(n3, r2, t2) {
                  var e3, i3 = r2 / 8, o3 = -1 === t2 ? 3 : 0, u3 = new Uint8Array(i3);
                  for (e3 = 0; e3 < i3; e3 += 1) u3[e3] = n3[e3 >>> 2] >>> 8 * (o3 + t2 * (e3 % 4)) & 255;
                  return u3;
                }(n2, i2, o2);
              };
            default:
              throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
          }
        }
        var u = 4294967296, f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], s = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428], w = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], a = "Chosen SHA variant is not supported", h = "Cannot set numRounds with MAC";
        function c(n2, r2) {
          var t2, e2, i2 = n2.binLen >>> 3, o2 = r2.binLen >>> 3, u2 = i2 << 3, f2 = 4 - i2 << 3;
          if (i2 % 4 != 0) {
            for (t2 = 0; t2 < o2; t2 += 4) e2 = i2 + t2 >>> 2, n2.value[e2] |= r2.value[t2 >>> 2] << u2, n2.value.push(0), n2.value[e2 + 1] |= r2.value[t2 >>> 2] >>> f2;
            return (n2.value.length << 2) - 4 >= o2 + i2 && n2.value.pop(), { value: n2.value, binLen: n2.binLen + r2.binLen };
          }
          return { value: n2.value.concat(r2.value), binLen: n2.binLen + r2.binLen };
        }
        function v(n2) {
          var r2 = { outputUpper: false, b64Pad: "=", outputLen: -1 }, t2 = n2 || {}, e2 = "Output length must be a multiple of 8";
          if (r2.outputUpper = t2.outputUpper || false, t2.b64Pad && (r2.b64Pad = t2.b64Pad), t2.outputLen) {
            if (t2.outputLen % 8 != 0) throw new Error(e2);
            r2.outputLen = t2.outputLen;
          } else if (t2.shakeLen) {
            if (t2.shakeLen % 8 != 0) throw new Error(e2);
            r2.outputLen = t2.shakeLen;
          }
          if ("boolean" != typeof r2.outputUpper) throw new Error("Invalid outputUpper formatting option");
          if ("string" != typeof r2.b64Pad) throw new Error("Invalid b64Pad formatting option");
          return r2;
        }
        function A(n2, r2, t2, e2) {
          var o2 = n2 + " must include a value and format";
          if (!r2) {
            if (!e2) throw new Error(o2);
            return e2;
          }
          if (void 0 === r2.value || !r2.format) throw new Error(o2);
          return i(r2.format, r2.encoding || "UTF8", t2)(r2.value);
        }
        var E = function() {
          function n2(n3, r2, t2) {
            var e2 = t2 || {};
            if (this.t = r2, this.i = e2.encoding || "UTF8", this.numRounds = e2.numRounds || 1, isNaN(this.numRounds) || this.numRounds !== parseInt(this.numRounds, 10) || 1 > this.numRounds) throw new Error("numRounds must a integer >= 1");
            this.o = n3, this.u = [], this.h = 0, this.v = false, this.A = 0, this.l = false, this.S = [], this.H = [];
          }
          return n2.prototype.update = function(n3) {
            var r2, t2 = 0, e2 = this.p >>> 5, i2 = this.m(n3, this.u, this.h), o2 = i2.binLen, u2 = i2.value, f2 = o2 >>> 5;
            for (r2 = 0; r2 < f2; r2 += e2) t2 + this.p <= o2 && (this.U = this.R(u2.slice(r2, r2 + e2), this.U), t2 += this.p);
            return this.A += t2, this.u = u2.slice(t2 >>> 5), this.h = o2 % this.p, this.v = true, this;
          }, n2.prototype.getHash = function(n3, r2) {
            var t2, e2, i2 = this.T, u2 = v(r2);
            if (this.C) {
              if (-1 === u2.outputLen) throw new Error("Output length must be specified in options");
              i2 = u2.outputLen;
            }
            var f2 = o(n3, i2, this.F, u2);
            if (this.l && this.K) return f2(this.K(u2));
            for (e2 = this.g(this.u.slice(), this.h, this.A, this.L(this.U), i2), t2 = 1; t2 < this.numRounds; t2 += 1) this.C && i2 % 32 != 0 && (e2[e2.length - 1] &= 16777215 >>> 24 - i2 % 32), e2 = this.g(e2, i2, 0, this.B(this.o), i2);
            return f2(e2);
          }, n2.prototype.setHMACKey = function(n3, r2, t2) {
            if (!this.k) throw new Error("Variant does not support HMAC");
            if (this.v) throw new Error("Cannot set MAC key after calling update");
            var e2 = i(r2, (t2 || {}).encoding || "UTF8", this.F);
            this.Y(e2(n3));
          }, n2.prototype.Y = function(n3) {
            var r2, t2 = this.p >>> 3, e2 = t2 / 4 - 1;
            if (1 !== this.numRounds) throw new Error(h);
            if (this.l) throw new Error("MAC key already set");
            for (t2 < n3.binLen / 8 && (n3.value = this.g(n3.value, n3.binLen, 0, this.B(this.o), this.T)); n3.value.length <= e2; ) n3.value.push(0);
            for (r2 = 0; r2 <= e2; r2 += 1) this.S[r2] = 909522486 ^ n3.value[r2], this.H[r2] = 1549556828 ^ n3.value[r2];
            this.U = this.R(this.S, this.U), this.A = this.p, this.l = true;
          }, n2.prototype.getHMAC = function(n3, r2) {
            var t2 = v(r2);
            return o(n3, this.T, this.F, t2)(this.N());
          }, n2.prototype.N = function() {
            var n3;
            if (!this.l) throw new Error("Cannot call getHMAC without first setting MAC key");
            var r2 = this.g(this.u.slice(), this.h, this.A, this.L(this.U), this.T);
            return n3 = this.R(this.H, this.B(this.o)), n3 = this.g(r2, this.T, this.p, n3, this.T);
          }, n2;
        }(), l = function(n2, r2) {
          return l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n3, r3) {
            n3.__proto__ = r3;
          } || function(n3, r3) {
            for (var t2 in r3) Object.prototype.hasOwnProperty.call(r3, t2) && (n3[t2] = r3[t2]);
          }, l(n2, r2);
        };
        function b(n2, r2) {
          if ("function" != typeof r2 && null !== r2) throw new TypeError("Class extends value " + String(r2) + " is not a constructor or null");
          function t2() {
            this.constructor = n2;
          }
          l(n2, r2), n2.prototype = null === r2 ? Object.create(r2) : (t2.prototype = r2.prototype, new t2());
        }
        function S(n2, r2) {
          return n2 << r2 | n2 >>> 32 - r2;
        }
        function H(n2, r2) {
          return n2 >>> r2 | n2 << 32 - r2;
        }
        function d(n2, r2) {
          return n2 >>> r2;
        }
        function p(n2, r2, t2) {
          return n2 ^ r2 ^ t2;
        }
        function y(n2, r2, t2) {
          return n2 & r2 ^ ~n2 & t2;
        }
        function m(n2, r2, t2) {
          return n2 & r2 ^ n2 & t2 ^ r2 & t2;
        }
        function U(n2) {
          return H(n2, 2) ^ H(n2, 13) ^ H(n2, 22);
        }
        function R(n2, r2) {
          var t2 = (65535 & n2) + (65535 & r2);
          return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16)) << 16 | 65535 & t2;
        }
        function T(n2, r2, t2, e2) {
          var i2 = (65535 & n2) + (65535 & r2) + (65535 & t2) + (65535 & e2);
          return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16) + (e2 >>> 16) + (i2 >>> 16)) << 16 | 65535 & i2;
        }
        function C(n2, r2, t2, e2, i2) {
          var o2 = (65535 & n2) + (65535 & r2) + (65535 & t2) + (65535 & e2) + (65535 & i2);
          return (65535 & (n2 >>> 16) + (r2 >>> 16) + (t2 >>> 16) + (e2 >>> 16) + (i2 >>> 16) + (o2 >>> 16)) << 16 | 65535 & o2;
        }
        function F(n2) {
          return H(n2, 7) ^ H(n2, 18) ^ d(n2, 3);
        }
        function K(n2) {
          return H(n2, 6) ^ H(n2, 11) ^ H(n2, 25);
        }
        function g(n2) {
          return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        }
        function L(n2, r2) {
          var t2, e2, i2, o2, u2, f2, s2, w2 = [];
          for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], s2 = 0; s2 < 80; s2 += 1) w2[s2] = s2 < 16 ? n2[s2] : S(w2[s2 - 3] ^ w2[s2 - 8] ^ w2[s2 - 14] ^ w2[s2 - 16], 1), f2 = s2 < 20 ? C(S(t2, 5), y(e2, i2, o2), u2, 1518500249, w2[s2]) : s2 < 40 ? C(S(t2, 5), p(e2, i2, o2), u2, 1859775393, w2[s2]) : s2 < 60 ? C(S(t2, 5), m(e2, i2, o2), u2, 2400959708, w2[s2]) : C(S(t2, 5), p(e2, i2, o2), u2, 3395469782, w2[s2]), u2 = o2, o2 = i2, i2 = S(e2, 30), e2 = t2, t2 = f2;
          return r2[0] = R(t2, r2[0]), r2[1] = R(e2, r2[1]), r2[2] = R(i2, r2[2]), r2[3] = R(o2, r2[3]), r2[4] = R(u2, r2[4]), r2;
        }
        function B(n2, r2, t2, e2) {
          for (var i2, o2 = 15 + (r2 + 65 >>> 9 << 4), f2 = r2 + t2; n2.length <= o2; ) n2.push(0);
          for (n2[r2 >>> 5] |= 128 << 24 - r2 % 32, n2[o2] = 4294967295 & f2, n2[o2 - 1] = f2 / u | 0, i2 = 0; i2 < n2.length; i2 += 16) e2 = L(n2.slice(i2, i2 + 16), e2);
          return e2;
        }
        "function" == typeof SuppressedError && SuppressedError;
        var k = function(n2) {
          function r2(r3, t2, e2) {
            var o2 = this;
            if ("SHA-1" !== r3) throw new Error(a);
            var u2 = e2 || {};
            return (o2 = n2.call(this, r3, t2, e2) || this).k = true, o2.K = o2.N, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = L, o2.L = function(n3) {
              return n3.slice();
            }, o2.B = g, o2.g = B, o2.U = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], o2.p = 512, o2.T = 160, o2.C = false, u2.hmacKey && o2.Y(A("hmacKey", u2.hmacKey, o2.F)), o2;
          }
          return b(r2, n2), r2;
        }(E);
        function Y(n2) {
          return "SHA-224" == n2 ? s.slice() : w.slice();
        }
        function N(n2, r2) {
          var t2, e2, i2, o2, u2, s2, w2, a2, h2, c2, v2, A2, E2 = [];
          for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], s2 = r2[5], w2 = r2[6], a2 = r2[7], v2 = 0; v2 < 64; v2 += 1) E2[v2] = v2 < 16 ? n2[v2] : T(H(A2 = E2[v2 - 2], 17) ^ H(A2, 19) ^ d(A2, 10), E2[v2 - 7], F(E2[v2 - 15]), E2[v2 - 16]), h2 = C(a2, K(u2), y(u2, s2, w2), f[v2], E2[v2]), c2 = R(U(t2), m(t2, e2, i2)), a2 = w2, w2 = s2, s2 = u2, u2 = R(o2, h2), o2 = i2, i2 = e2, e2 = t2, t2 = R(h2, c2);
          return r2[0] = R(t2, r2[0]), r2[1] = R(e2, r2[1]), r2[2] = R(i2, r2[2]), r2[3] = R(o2, r2[3]), r2[4] = R(u2, r2[4]), r2[5] = R(s2, r2[5]), r2[6] = R(w2, r2[6]), r2[7] = R(a2, r2[7]), r2;
        }
        var I = function(n2) {
          function r2(r3, t2, e2) {
            var o2 = this;
            if ("SHA-224" !== r3 && "SHA-256" !== r3) throw new Error(a);
            var f2 = e2 || {};
            return (o2 = n2.call(this, r3, t2, e2) || this).K = o2.N, o2.k = true, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = N, o2.L = function(n3) {
              return n3.slice();
            }, o2.B = Y, o2.g = function(n3, t3, e3, i2) {
              return function(n4, r4, t4, e4, i3) {
                for (var o3, f3 = 15 + (r4 + 65 >>> 9 << 4), s2 = r4 + t4; n4.length <= f3; ) n4.push(0);
                for (n4[r4 >>> 5] |= 128 << 24 - r4 % 32, n4[f3] = 4294967295 & s2, n4[f3 - 1] = s2 / u | 0, o3 = 0; o3 < n4.length; o3 += 16) e4 = N(n4.slice(o3, o3 + 16), e4);
                return "SHA-224" === i3 ? [e4[0], e4[1], e4[2], e4[3], e4[4], e4[5], e4[6]] : e4;
              }(n3, t3, e3, i2, r3);
            }, o2.U = Y(r3), o2.p = 512, o2.T = "SHA-224" === r3 ? 224 : 256, o2.C = false, f2.hmacKey && o2.Y(A("hmacKey", f2.hmacKey, o2.F)), o2;
          }
          return b(r2, n2), r2;
        }(E), M = function(n2, r2) {
          this.I = n2, this.M = r2;
        };
        function X(n2, r2) {
          var t2;
          return r2 > 32 ? (t2 = 64 - r2, new M(n2.M << r2 | n2.I >>> t2, n2.I << r2 | n2.M >>> t2)) : 0 !== r2 ? (t2 = 32 - r2, new M(n2.I << r2 | n2.M >>> t2, n2.M << r2 | n2.I >>> t2)) : n2;
        }
        function z(n2, r2) {
          var t2;
          return r2 < 32 ? (t2 = 32 - r2, new M(n2.I >>> r2 | n2.M << t2, n2.M >>> r2 | n2.I << t2)) : (t2 = 64 - r2, new M(n2.M >>> r2 | n2.I << t2, n2.I >>> r2 | n2.M << t2));
        }
        function O(n2, r2) {
          return new M(n2.I >>> r2, n2.M >>> r2 | n2.I << 32 - r2);
        }
        function j(n2, r2, t2) {
          return new M(n2.I & r2.I ^ ~n2.I & t2.I, n2.M & r2.M ^ ~n2.M & t2.M);
        }
        function _(n2, r2, t2) {
          return new M(n2.I & r2.I ^ n2.I & t2.I ^ r2.I & t2.I, n2.M & r2.M ^ n2.M & t2.M ^ r2.M & t2.M);
        }
        function x(n2) {
          var r2 = z(n2, 28), t2 = z(n2, 34), e2 = z(n2, 39);
          return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
        }
        function P(n2, r2) {
          var t2, e2;
          t2 = (65535 & n2.M) + (65535 & r2.M);
          var i2 = (65535 & (e2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2 >>> 16))) << 16 | 65535 & t2;
          return t2 = (65535 & n2.I) + (65535 & r2.I) + (e2 >>> 16), e2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2 >>> 16), new M((65535 & e2) << 16 | 65535 & t2, i2);
        }
        function V(n2, r2, t2, e2) {
          var i2, o2;
          i2 = (65535 & n2.M) + (65535 & r2.M) + (65535 & t2.M) + (65535 & e2.M);
          var u2 = (65535 & (o2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2.M >>> 16) + (e2.M >>> 16) + (i2 >>> 16))) << 16 | 65535 & i2;
          return i2 = (65535 & n2.I) + (65535 & r2.I) + (65535 & t2.I) + (65535 & e2.I) + (o2 >>> 16), o2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2.I >>> 16) + (e2.I >>> 16) + (i2 >>> 16), new M((65535 & o2) << 16 | 65535 & i2, u2);
        }
        function Z(n2, r2, t2, e2, i2) {
          var o2, u2;
          o2 = (65535 & n2.M) + (65535 & r2.M) + (65535 & t2.M) + (65535 & e2.M) + (65535 & i2.M);
          var f2 = (65535 & (u2 = (n2.M >>> 16) + (r2.M >>> 16) + (t2.M >>> 16) + (e2.M >>> 16) + (i2.M >>> 16) + (o2 >>> 16))) << 16 | 65535 & o2;
          return o2 = (65535 & n2.I) + (65535 & r2.I) + (65535 & t2.I) + (65535 & e2.I) + (65535 & i2.I) + (u2 >>> 16), u2 = (n2.I >>> 16) + (r2.I >>> 16) + (t2.I >>> 16) + (e2.I >>> 16) + (i2.I >>> 16) + (o2 >>> 16), new M((65535 & u2) << 16 | 65535 & o2, f2);
        }
        function q(n2, r2) {
          return new M(n2.I ^ r2.I, n2.M ^ r2.M);
        }
        function D(n2) {
          var r2 = z(n2, 1), t2 = z(n2, 8), e2 = O(n2, 7);
          return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
        }
        function G(n2) {
          var r2 = z(n2, 14), t2 = z(n2, 18), e2 = z(n2, 41);
          return new M(r2.I ^ t2.I ^ e2.I, r2.M ^ t2.M ^ e2.M);
        }
        var J = [new M(f[0], 3609767458), new M(f[1], 602891725), new M(f[2], 3964484399), new M(f[3], 2173295548), new M(f[4], 4081628472), new M(f[5], 3053834265), new M(f[6], 2937671579), new M(f[7], 3664609560), new M(f[8], 2734883394), new M(f[9], 1164996542), new M(f[10], 1323610764), new M(f[11], 3590304994), new M(f[12], 4068182383), new M(f[13], 991336113), new M(f[14], 633803317), new M(f[15], 3479774868), new M(f[16], 2666613458), new M(f[17], 944711139), new M(f[18], 2341262773), new M(f[19], 2007800933), new M(f[20], 1495990901), new M(f[21], 1856431235), new M(f[22], 3175218132), new M(f[23], 2198950837), new M(f[24], 3999719339), new M(f[25], 766784016), new M(f[26], 2566594879), new M(f[27], 3203337956), new M(f[28], 1034457026), new M(f[29], 2466948901), new M(f[30], 3758326383), new M(f[31], 168717936), new M(f[32], 1188179964), new M(f[33], 1546045734), new M(f[34], 1522805485), new M(f[35], 2643833823), new M(f[36], 2343527390), new M(f[37], 1014477480), new M(f[38], 1206759142), new M(f[39], 344077627), new M(f[40], 1290863460), new M(f[41], 3158454273), new M(f[42], 3505952657), new M(f[43], 106217008), new M(f[44], 3606008344), new M(f[45], 1432725776), new M(f[46], 1467031594), new M(f[47], 851169720), new M(f[48], 3100823752), new M(f[49], 1363258195), new M(f[50], 3750685593), new M(f[51], 3785050280), new M(f[52], 3318307427), new M(f[53], 3812723403), new M(f[54], 2003034995), new M(f[55], 3602036899), new M(f[56], 1575990012), new M(f[57], 1125592928), new M(f[58], 2716904306), new M(f[59], 442776044), new M(f[60], 593698344), new M(f[61], 3733110249), new M(f[62], 2999351573), new M(f[63], 3815920427), new M(3391569614, 3928383900), new M(3515267271, 566280711), new M(3940187606, 3454069534), new M(4118630271, 4000239992), new M(116418474, 1914138554), new M(174292421, 2731055270), new M(289380356, 3203993006), new M(460393269, 320620315), new M(685471733, 587496836), new M(852142971, 1086792851), new M(1017036298, 365543100), new M(1126000580, 2618297676), new M(1288033470, 3409855158), new M(1501505948, 4234509866), new M(1607167915, 987167468), new M(1816402316, 1246189591)];
        function Q(n2) {
          return "SHA-384" === n2 ? [new M(3418070365, s[0]), new M(1654270250, s[1]), new M(2438529370, s[2]), new M(355462360, s[3]), new M(1731405415, s[4]), new M(41048885895, s[5]), new M(3675008525, s[6]), new M(1203062813, s[7])] : [new M(w[0], 4089235720), new M(w[1], 2227873595), new M(w[2], 4271175723), new M(w[3], 1595750129), new M(w[4], 2917565137), new M(w[5], 725511199), new M(w[6], 4215389547), new M(w[7], 327033209)];
        }
        function W(n2, r2) {
          var t2, e2, i2, o2, u2, f2, s2, w2, a2, h2, c2, v2, A2, E2, l2, b2, S2 = [];
          for (t2 = r2[0], e2 = r2[1], i2 = r2[2], o2 = r2[3], u2 = r2[4], f2 = r2[5], s2 = r2[6], w2 = r2[7], c2 = 0; c2 < 80; c2 += 1) c2 < 16 ? (v2 = 2 * c2, S2[c2] = new M(n2[v2], n2[v2 + 1])) : S2[c2] = V((A2 = S2[c2 - 2], E2 = void 0, l2 = void 0, b2 = void 0, E2 = z(A2, 19), l2 = z(A2, 61), b2 = O(A2, 6), new M(E2.I ^ l2.I ^ b2.I, E2.M ^ l2.M ^ b2.M)), S2[c2 - 7], D(S2[c2 - 15]), S2[c2 - 16]), a2 = Z(w2, G(u2), j(u2, f2, s2), J[c2], S2[c2]), h2 = P(x(t2), _(t2, e2, i2)), w2 = s2, s2 = f2, f2 = u2, u2 = P(o2, a2), o2 = i2, i2 = e2, e2 = t2, t2 = P(a2, h2);
          return r2[0] = P(t2, r2[0]), r2[1] = P(e2, r2[1]), r2[2] = P(i2, r2[2]), r2[3] = P(o2, r2[3]), r2[4] = P(u2, r2[4]), r2[5] = P(f2, r2[5]), r2[6] = P(s2, r2[6]), r2[7] = P(w2, r2[7]), r2;
        }
        var $ = function(n2) {
          function r2(r3, t2, e2) {
            var o2 = this;
            if ("SHA-384" !== r3 && "SHA-512" !== r3) throw new Error(a);
            var f2 = e2 || {};
            return (o2 = n2.call(this, r3, t2, e2) || this).K = o2.N, o2.k = true, o2.F = -1, o2.m = i(o2.t, o2.i, o2.F), o2.R = W, o2.L = function(n3) {
              return n3.slice();
            }, o2.B = Q, o2.g = function(n3, t3, e3, i2) {
              return function(n4, r4, t4, e4, i3) {
                for (var o3, f3 = 31 + (r4 + 129 >>> 10 << 5), s2 = r4 + t4; n4.length <= f3; ) n4.push(0);
                for (n4[r4 >>> 5] |= 128 << 24 - r4 % 32, n4[f3] = 4294967295 & s2, n4[f3 - 1] = s2 / u | 0, o3 = 0; o3 < n4.length; o3 += 32) e4 = W(n4.slice(o3, o3 + 32), e4);
                return "SHA-384" === i3 ? [e4[0].I, e4[0].M, e4[1].I, e4[1].M, e4[2].I, e4[2].M, e4[3].I, e4[3].M, e4[4].I, e4[4].M, e4[5].I, e4[5].M] : [e4[0].I, e4[0].M, e4[1].I, e4[1].M, e4[2].I, e4[2].M, e4[3].I, e4[3].M, e4[4].I, e4[4].M, e4[5].I, e4[5].M, e4[6].I, e4[6].M, e4[7].I, e4[7].M];
              }(n3, t3, e3, i2, r3);
            }, o2.U = Q(r3), o2.p = 1024, o2.T = "SHA-384" === r3 ? 384 : 512, o2.C = false, f2.hmacKey && o2.Y(A("hmacKey", f2.hmacKey, o2.F)), o2;
          }
          return b(r2, n2), r2;
        }(E), nn = [new M(0, 1), new M(0, 32898), new M(2147483648, 32906), new M(2147483648, 2147516416), new M(0, 32907), new M(0, 2147483649), new M(2147483648, 2147516545), new M(2147483648, 32777), new M(0, 138), new M(0, 136), new M(0, 2147516425), new M(0, 2147483658), new M(0, 2147516555), new M(2147483648, 139), new M(2147483648, 32905), new M(2147483648, 32771), new M(2147483648, 32770), new M(2147483648, 128), new M(0, 32778), new M(2147483648, 2147483658), new M(2147483648, 2147516545), new M(2147483648, 32896), new M(0, 2147483649), new M(2147483648, 2147516424)], rn = [[0, 36, 3, 41, 18], [1, 44, 10, 45, 2], [62, 6, 43, 15, 61], [28, 55, 25, 21, 56], [27, 20, 39, 8, 14]];
        function tn(n2) {
          var r2, t2 = [];
          for (r2 = 0; r2 < 5; r2 += 1) t2[r2] = [new M(0, 0), new M(0, 0), new M(0, 0), new M(0, 0), new M(0, 0)];
          return t2;
        }
        function en(n2) {
          var r2, t2 = [];
          for (r2 = 0; r2 < 5; r2 += 1) t2[r2] = n2[r2].slice();
          return t2;
        }
        function on(n2, r2) {
          var t2, e2, i2, o2, u2, f2, s2, w2, a2, h2 = [], c2 = [];
          if (null !== n2) for (e2 = 0; e2 < n2.length; e2 += 2) r2[(e2 >>> 1) % 5][(e2 >>> 1) / 5 | 0] = q(r2[(e2 >>> 1) % 5][(e2 >>> 1) / 5 | 0], new M(n2[e2 + 1], n2[e2]));
          for (t2 = 0; t2 < 24; t2 += 1) {
            for (o2 = tn(), e2 = 0; e2 < 5; e2 += 1) h2[e2] = (u2 = r2[e2][0], f2 = r2[e2][1], s2 = r2[e2][2], w2 = r2[e2][3], a2 = r2[e2][4], new M(u2.I ^ f2.I ^ s2.I ^ w2.I ^ a2.I, u2.M ^ f2.M ^ s2.M ^ w2.M ^ a2.M));
            for (e2 = 0; e2 < 5; e2 += 1) c2[e2] = q(h2[(e2 + 4) % 5], X(h2[(e2 + 1) % 5], 1));
            for (e2 = 0; e2 < 5; e2 += 1) for (i2 = 0; i2 < 5; i2 += 1) r2[e2][i2] = q(r2[e2][i2], c2[e2]);
            for (e2 = 0; e2 < 5; e2 += 1) for (i2 = 0; i2 < 5; i2 += 1) o2[i2][(2 * e2 + 3 * i2) % 5] = X(r2[e2][i2], rn[e2][i2]);
            for (e2 = 0; e2 < 5; e2 += 1) for (i2 = 0; i2 < 5; i2 += 1) r2[e2][i2] = q(o2[e2][i2], new M(~o2[(e2 + 1) % 5][i2].I & o2[(e2 + 2) % 5][i2].I, ~o2[(e2 + 1) % 5][i2].M & o2[(e2 + 2) % 5][i2].M));
            r2[0][0] = q(r2[0][0], nn[t2]);
          }
          return r2;
        }
        function un(n2) {
          var r2, t2, e2 = 0, i2 = [0, 0], o2 = [4294967295 & n2, n2 / u & 2097151];
          for (r2 = 6; r2 >= 0; r2--) 0 === (t2 = o2[r2 >> 2] >>> 8 * r2 & 255) && 0 === e2 || (i2[e2 + 1 >> 2] |= t2 << 8 * (e2 + 1), e2 += 1);
          return e2 = 0 !== e2 ? e2 : 1, i2[0] |= e2, { value: e2 + 1 > 4 ? i2 : [i2[0]], binLen: 8 + 8 * e2 };
        }
        function fn(n2) {
          return c(un(n2.binLen), n2);
        }
        function sn(n2, r2) {
          var t2, e2 = un(r2), i2 = r2 >>> 2, o2 = (i2 - (e2 = c(e2, n2)).value.length % i2) % i2;
          for (t2 = 0; t2 < o2; t2++) e2.value.push(0);
          return e2.value;
        }
        var wn = function(n2) {
          function r2(r3, t2, e2) {
            var o2 = this, u2 = 6, f2 = 0, s2 = e2 || {};
            if (1 !== (o2 = n2.call(this, r3, t2, e2) || this).numRounds) {
              if (s2.kmacKey || s2.hmacKey) throw new Error(h);
              if ("CSHAKE128" === o2.o || "CSHAKE256" === o2.o) throw new Error("Cannot set numRounds for CSHAKE variants");
            }
            switch (o2.F = 1, o2.m = i(o2.t, o2.i, o2.F), o2.R = on, o2.L = en, o2.B = tn, o2.U = tn(), o2.C = false, r3) {
              case "SHA3-224":
                o2.p = f2 = 1152, o2.T = 224, o2.k = true, o2.K = o2.N;
                break;
              case "SHA3-256":
                o2.p = f2 = 1088, o2.T = 256, o2.k = true, o2.K = o2.N;
                break;
              case "SHA3-384":
                o2.p = f2 = 832, o2.T = 384, o2.k = true, o2.K = o2.N;
                break;
              case "SHA3-512":
                o2.p = f2 = 576, o2.T = 512, o2.k = true, o2.K = o2.N;
                break;
              case "SHAKE128":
                u2 = 31, o2.p = f2 = 1344, o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
                break;
              case "SHAKE256":
                u2 = 31, o2.p = f2 = 1088, o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
                break;
              case "KMAC128":
                u2 = 4, o2.p = f2 = 1344, o2.X(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = o2.O;
                break;
              case "KMAC256":
                u2 = 4, o2.p = f2 = 1088, o2.X(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = o2.O;
                break;
              case "CSHAKE128":
                o2.p = f2 = 1344, u2 = o2.j(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
                break;
              case "CSHAKE256":
                o2.p = f2 = 1088, u2 = o2.j(e2), o2.T = -1, o2.C = true, o2.k = false, o2.K = null;
                break;
              default:
                throw new Error(a);
            }
            return o2.g = function(n3, r4, t3, e3, i2) {
              return function(n4, r5, t4, e4, i3, o3, u3) {
                var f3, s3, w2 = 0, a2 = [], h2 = i3 >>> 5, c2 = r5 >>> 5;
                for (f3 = 0; f3 < c2 && r5 >= i3; f3 += h2) e4 = on(n4.slice(f3, f3 + h2), e4), r5 -= i3;
                for (n4 = n4.slice(f3), r5 %= i3; n4.length < h2; ) n4.push(0);
                for (n4[(f3 = r5 >>> 3) >> 2] ^= o3 << f3 % 4 * 8, n4[h2 - 1] ^= 2147483648, e4 = on(n4, e4); 32 * a2.length < u3 && (s3 = e4[w2 % 5][w2 / 5 | 0], a2.push(s3.M), !(32 * a2.length >= u3)); ) a2.push(s3.I), 0 == 64 * (w2 += 1) % i3 && (on(null, e4), w2 = 0);
                return a2;
              }(n3, r4, 0, e3, f2, u2, i2);
            }, s2.hmacKey && o2.Y(A("hmacKey", s2.hmacKey, o2.F)), o2;
          }
          return b(r2, n2), r2.prototype.j = function(n3, r3) {
            var t2 = function(n4) {
              var r4 = n4 || {};
              return { funcName: A("funcName", r4.funcName, 1, { value: [], binLen: 0 }), customization: A("Customization", r4.customization, 1, { value: [], binLen: 0 }) };
            }(n3 || {});
            r3 && (t2.funcName = r3);
            var e2 = c(fn(t2.funcName), fn(t2.customization));
            if (0 !== t2.customization.binLen || 0 !== t2.funcName.binLen) {
              for (var i2 = sn(e2, this.p >>> 3), o2 = 0; o2 < i2.length; o2 += this.p >>> 5) this.U = this.R(i2.slice(o2, o2 + (this.p >>> 5)), this.U), this.A += this.p;
              return 4;
            }
            return 31;
          }, r2.prototype.X = function(n3) {
            var r3 = function(n4) {
              var r4 = n4 || {};
              return { kmacKey: A("kmacKey", r4.kmacKey, 1), funcName: { value: [1128353099], binLen: 32 }, customization: A("Customization", r4.customization, 1, { value: [], binLen: 0 }) };
            }(n3 || {});
            this.j(n3, r3.funcName);
            for (var t2 = sn(fn(r3.kmacKey), this.p >>> 3), e2 = 0; e2 < t2.length; e2 += this.p >>> 5) this.U = this.R(t2.slice(e2, e2 + (this.p >>> 5)), this.U), this.A += this.p;
            this.l = true;
          }, r2.prototype.O = function(n3) {
            var r3 = c({ value: this.u.slice(), binLen: this.h }, function(n4) {
              var r4, t2, e2 = 0, i2 = [0, 0], o2 = [4294967295 & n4, n4 / u & 2097151];
              for (r4 = 6; r4 >= 0; r4--) 0 == (t2 = o2[r4 >> 2] >>> 8 * r4 & 255) && 0 === e2 || (i2[e2 >> 2] |= t2 << 8 * e2, e2 += 1);
              return i2[(e2 = 0 !== e2 ? e2 : 1) >> 2] |= e2 << 8 * e2, { value: e2 + 1 > 4 ? i2 : [i2[0]], binLen: 8 + 8 * e2 };
            }(n3.outputLen));
            return this.g(r3.value, r3.binLen, this.A, this.L(this.U), n3.outputLen);
          }, r2;
        }(E);
        return function() {
          function n2(n3, r2, t2) {
            if ("SHA-1" == n3) this._ = new k(n3, r2, t2);
            else if ("SHA-224" == n3 || "SHA-256" == n3) this._ = new I(n3, r2, t2);
            else if ("SHA-384" == n3 || "SHA-512" == n3) this._ = new $(n3, r2, t2);
            else {
              if ("SHA3-224" != n3 && "SHA3-256" != n3 && "SHA3-384" != n3 && "SHA3-512" != n3 && "SHAKE128" != n3 && "SHAKE256" != n3 && "CSHAKE128" != n3 && "CSHAKE256" != n3 && "KMAC128" != n3 && "KMAC256" != n3) throw new Error(a);
              this._ = new wn(n3, r2, t2);
            }
          }
          return n2.prototype.update = function(n3) {
            return this._.update(n3), this;
          }, n2.prototype.getHash = function(n3, r2) {
            return this._.getHash(n3, r2);
          }, n2.prototype.setHMACKey = function(n3, r2, t2) {
            this._.setHMACKey(n3, r2, t2);
          }, n2.prototype.getHMAC = function(n3, r2) {
            return this._.getHMAC(n3, r2);
          }, n2;
        }();
      });
    }
  });

  // node_modules/totp-generator/lib/cjs/index.js
  var require_cjs = __commonJS({
    "node_modules/totp-generator/lib/cjs/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TOTP = void 0;
      var jssha_1 = __importDefault(require_sha());
      var TOTP2 = class {
        static generate(key, options) {
          const _options = Object.assign({ digits: 6, algorithm: "SHA-1", period: 30, timestamp: Date.now() }, options);
          const epoch = Math.floor(_options.timestamp / 1e3);
          const time = this.leftpad(this.dec2hex(Math.floor(epoch / _options.period)), 16, "0");
          const shaObj = new jssha_1.default(_options.algorithm, "HEX");
          shaObj.setHMACKey(this.base32tohex(key), "HEX");
          shaObj.update(time);
          const hmac = shaObj.getHMAC("HEX");
          const offset = this.hex2dec(hmac.substring(hmac.length - 1));
          let otp = (this.hex2dec(hmac.substr(offset * 2, 8)) & this.hex2dec("7fffffff")) + "";
          const start = Math.max(otp.length - _options.digits, 0);
          otp = otp.substring(start, start + _options.digits);
          const expires = Math.ceil((_options.timestamp + 1) / (_options.period * 1e3)) * _options.period * 1e3;
          return { otp, expires };
        }
        static hex2dec(hex) {
          return parseInt(hex, 16);
        }
        static dec2hex(dec) {
          return (dec < 15.5 ? "0" : "") + Math.round(dec).toString(16);
        }
        static base32tohex(base32) {
          const base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
          let bits = "";
          let hex = "";
          const _base32 = base32.replace(/=+$/, "");
          for (let i = 0; i < _base32.length; i++) {
            const val = base32chars.indexOf(base32.charAt(i).toUpperCase());
            if (val === -1)
              throw new Error("Invalid base32 character in key");
            bits += this.leftpad(val.toString(2), 5, "0");
          }
          for (let i = 0; i + 8 <= bits.length; i += 8) {
            const chunk = bits.substr(i, 8);
            hex = hex + this.leftpad(parseInt(chunk, 2).toString(16), 2, "0");
          }
          return hex;
        }
        static leftpad(str, len, pad) {
          if (len + 1 >= str.length) {
            str = Array(len + 1 - str.length).join(pad) + str;
          }
          return str;
        }
      };
      exports.TOTP = TOTP2;
    }
  });

  // node_modules/qr-scanner/qr-scanner-worker.min.js
  var qr_scanner_worker_min_exports = {};
  __export(qr_scanner_worker_min_exports, {
    createWorker: () => createWorker
  });
  var createWorker;
  var init_qr_scanner_worker_min = __esm({
    "node_modules/qr-scanner/qr-scanner-worker.min.js"() {
      createWorker = () => new Worker(URL.createObjectURL(new Blob([`class x{constructor(a,b){this.width=b;this.height=a.length/b;this.data=a}static createEmpty(a,b){return new x(new Uint8ClampedArray(a*b),a)}get(a,b){return 0>a||a>=this.width||0>b||b>=this.height?!1:!!this.data[b*this.width+a]}set(a,b,c){this.data[b*this.width+a]=c?1:0}setRegion(a,b,c,d,e){for(let f=b;f<b+d;f++)for(let g=a;g<a+c;g++)this.set(g,f,!!e)}}
class A{constructor(a,b,c){this.width=a;a*=b;if(c&&c.length!==a)throw Error("Wrong buffer size");this.data=c||new Uint8ClampedArray(a)}get(a,b){return this.data[b*this.width+a]}set(a,b,c){this.data[b*this.width+a]=c}}
class ba{constructor(a){this.bitOffset=this.byteOffset=0;this.bytes=a}readBits(a){if(1>a||32<a||a>this.available())throw Error("Cannot read "+a.toString()+" bits");var b=0;if(0<this.bitOffset){b=8-this.bitOffset;var c=a<b?a:b;b-=c;b=(this.bytes[this.byteOffset]&255>>8-c<<b)>>b;a-=c;this.bitOffset+=c;8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(0<a){for(;8<=a;)b=b<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,a-=8;0<a&&(c=8-a,b=b<<a|(this.bytes[this.byteOffset]&255>>c<<c)>>c,
this.bitOffset+=a)}return b}available(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset}}var B,C=B||(B={});C.Numeric="numeric";C.Alphanumeric="alphanumeric";C.Byte="byte";C.Kanji="kanji";C.ECI="eci";C.StructuredAppend="structuredappend";var D,E=D||(D={});E[E.Terminator=0]="Terminator";E[E.Numeric=1]="Numeric";E[E.Alphanumeric=2]="Alphanumeric";E[E.Byte=4]="Byte";E[E.Kanji=8]="Kanji";E[E.ECI=7]="ECI";E[E.StructuredAppend=3]="StructuredAppend";let F="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");
function ca(a,b){let c=[],d="";b=a.readBits([8,16,16][b]);for(let e=0;e<b;e++){let f=a.readBits(8);c.push(f)}try{d+=decodeURIComponent(c.map(e=>\`%\${("0"+e.toString(16)).substr(-2)}\`).join(""))}catch(e){}return{bytes:c,text:d}}
function da(a,b){a=new ba(a);let c=9>=b?0:26>=b?1:2;for(b={text:"",bytes:[],chunks:[],version:b};4<=a.available();){var d=a.readBits(4);if(d===D.Terminator)return b;if(d===D.ECI)0===a.readBits(1)?b.chunks.push({type:B.ECI,assignmentNumber:a.readBits(7)}):0===a.readBits(1)?b.chunks.push({type:B.ECI,assignmentNumber:a.readBits(14)}):0===a.readBits(1)?b.chunks.push({type:B.ECI,assignmentNumber:a.readBits(21)}):b.chunks.push({type:B.ECI,assignmentNumber:-1});else if(d===D.Numeric){var e=a,f=[];d="";for(var g=
e.readBits([10,12,14][c]);3<=g;){var h=e.readBits(10);if(1E3<=h)throw Error("Invalid numeric value above 999");var k=Math.floor(h/100),m=Math.floor(h/10)%10;h%=10;f.push(48+k,48+m,48+h);d+=k.toString()+m.toString()+h.toString();g-=3}if(2===g){g=e.readBits(7);if(100<=g)throw Error("Invalid numeric value above 99");e=Math.floor(g/10);g%=10;f.push(48+e,48+g);d+=e.toString()+g.toString()}else if(1===g){e=e.readBits(4);if(10<=e)throw Error("Invalid numeric value above 9");f.push(48+e);d+=e.toString()}b.text+=
d;b.bytes.push(...f);b.chunks.push({type:B.Numeric,text:d})}else if(d===D.Alphanumeric){e=a;f=[];d="";for(g=e.readBits([9,11,13][c]);2<=g;)m=e.readBits(11),k=Math.floor(m/45),m%=45,f.push(F[k].charCodeAt(0),F[m].charCodeAt(0)),d+=F[k]+F[m],g-=2;1===g&&(e=e.readBits(6),f.push(F[e].charCodeAt(0)),d+=F[e]);b.text+=d;b.bytes.push(...f);b.chunks.push({type:B.Alphanumeric,text:d})}else if(d===D.Byte)d=ca(a,c),b.text+=d.text,b.bytes.push(...d.bytes),b.chunks.push({type:B.Byte,bytes:d.bytes,text:d.text});
else if(d===D.Kanji){f=a;d=[];e=f.readBits([8,10,12][c]);for(g=0;g<e;g++)k=f.readBits(13),k=Math.floor(k/192)<<8|k%192,k=7936>k?k+33088:k+49472,d.push(k>>8,k&255);f=(new TextDecoder("shift-jis")).decode(Uint8Array.from(d));b.text+=f;b.bytes.push(...d);b.chunks.push({type:B.Kanji,bytes:d,text:f})}else d===D.StructuredAppend&&b.chunks.push({type:B.StructuredAppend,currentSequence:a.readBits(4),totalSequence:a.readBits(4),parity:a.readBits(8)})}if(0===a.available()||0===a.readBits(a.available()))return b}
class G{constructor(a,b){if(0===b.length)throw Error("No coefficients.");this.field=a;let c=b.length;if(1<c&&0===b[0]){let d=1;for(;d<c&&0===b[d];)d++;if(d===c)this.coefficients=a.zero.coefficients;else for(this.coefficients=new Uint8ClampedArray(c-d),a=0;a<this.coefficients.length;a++)this.coefficients[a]=b[d+a]}else this.coefficients=b}degree(){return this.coefficients.length-1}isZero(){return 0===this.coefficients[0]}getCoefficient(a){return this.coefficients[this.coefficients.length-1-a]}addOrSubtract(a){if(this.isZero())return a;
if(a.isZero())return this;let b=this.coefficients;a=a.coefficients;b.length>a.length&&([b,a]=[a,b]);let c=new Uint8ClampedArray(a.length),d=a.length-b.length;for(var e=0;e<d;e++)c[e]=a[e];for(e=d;e<a.length;e++)c[e]=b[e-d]^a[e];return new G(this.field,c)}multiply(a){if(0===a)return this.field.zero;if(1===a)return this;let b=this.coefficients.length,c=new Uint8ClampedArray(b);for(let d=0;d<b;d++)c[d]=this.field.multiply(this.coefficients[d],a);return new G(this.field,c)}multiplyPoly(a){if(this.isZero()||
a.isZero())return this.field.zero;let b=this.coefficients,c=b.length;a=a.coefficients;let d=a.length,e=new Uint8ClampedArray(c+d-1);for(let f=0;f<c;f++){let g=b[f];for(let h=0;h<d;h++)e[f+h]=H(e[f+h],this.field.multiply(g,a[h]))}return new G(this.field,e)}multiplyByMonomial(a,b){if(0>a)throw Error("Invalid degree less than 0");if(0===b)return this.field.zero;let c=this.coefficients.length;a=new Uint8ClampedArray(c+a);for(let d=0;d<c;d++)a[d]=this.field.multiply(this.coefficients[d],b);return new G(this.field,
a)}evaluateAt(a){let b=0;if(0===a)return this.getCoefficient(0);let c=this.coefficients.length;if(1===a)return this.coefficients.forEach(d=>{b^=d}),b;b=this.coefficients[0];for(let d=1;d<c;d++)b=H(this.field.multiply(a,b),this.coefficients[d]);return b}}function H(a,b){return a^b}
class ea{constructor(a,b,c){this.primitive=a;this.size=b;this.generatorBase=c;this.expTable=Array(this.size);this.logTable=Array(this.size);a=1;for(b=0;b<this.size;b++)this.expTable[b]=a,a*=2,a>=this.size&&(a=(a^this.primitive)&this.size-1);for(a=0;a<this.size-1;a++)this.logTable[this.expTable[a]]=a;this.zero=new G(this,Uint8ClampedArray.from([0]));this.one=new G(this,Uint8ClampedArray.from([1]))}multiply(a,b){return 0===a||0===b?0:this.expTable[(this.logTable[a]+this.logTable[b])%(this.size-1)]}inverse(a){if(0===
a)throw Error("Can't invert 0");return this.expTable[this.size-this.logTable[a]-1]}buildMonomial(a,b){if(0>a)throw Error("Invalid monomial degree less than 0");if(0===b)return this.zero;a=new Uint8ClampedArray(a+1);a[0]=b;return new G(this,a)}log(a){if(0===a)throw Error("Can't take log(0)");return this.logTable[a]}exp(a){return this.expTable[a]}}
function fa(a,b,c,d){b.degree()<c.degree()&&([b,c]=[c,b]);let e=a.zero;for(var f=a.one;c.degree()>=d/2;){var g=b;let h=e;b=c;e=f;if(b.isZero())return null;c=g;f=a.zero;g=b.getCoefficient(b.degree());for(g=a.inverse(g);c.degree()>=b.degree()&&!c.isZero();){let k=c.degree()-b.degree(),m=a.multiply(c.getCoefficient(c.degree()),g);f=f.addOrSubtract(a.buildMonomial(k,m));c=c.addOrSubtract(b.multiplyByMonomial(k,m))}f=f.multiplyPoly(e).addOrSubtract(h);if(c.degree()>=b.degree())return null}d=f.getCoefficient(0);
if(0===d)return null;a=a.inverse(d);return[f.multiply(a),c.multiply(a)]}
function ha(a,b){let c=new Uint8ClampedArray(a.length);c.set(a);a=new ea(285,256,0);var d=new G(a,c),e=new Uint8ClampedArray(b),f=!1;for(var g=0;g<b;g++){var h=d.evaluateAt(a.exp(g+a.generatorBase));e[e.length-1-g]=h;0!==h&&(f=!0)}if(!f)return c;d=new G(a,e);d=fa(a,a.buildMonomial(b,1),d,b);if(null===d)return null;b=d[0];g=b.degree();if(1===g)b=[b.getCoefficient(1)];else{e=Array(g);f=0;for(h=1;h<a.size&&f<g;h++)0===b.evaluateAt(h)&&(e[f]=a.inverse(h),f++);b=f!==g?null:e}if(null==b)return null;e=d[1];
f=b.length;d=Array(f);for(g=0;g<f;g++){h=a.inverse(b[g]);let k=1;for(let m=0;m<f;m++)g!==m&&(k=a.multiply(k,H(1,a.multiply(b[m],h))));d[g]=a.multiply(e.evaluateAt(h),a.inverse(k));0!==a.generatorBase&&(d[g]=a.multiply(d[g],h))}for(e=0;e<b.length;e++){f=c.length-1-a.log(b[e]);if(0>f)return null;c[f]^=d[e]}return c}
let I=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,
dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,
ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},
{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,
34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,
ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},
{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},
{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,
dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,
dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},
{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},
{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},
{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,
ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,
74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,
versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,
dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,
dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},
{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},
{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},
{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},
{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},
{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,
ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,
dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,
dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},
{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},
{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,
ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,
26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},
{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},
{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,
dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},
{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,
dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},
{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,
dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},
{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,
dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],
errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,
versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},
{numBlocks:61,dataCodewordsPerBlock:16}]}]}];function J(a,b){a^=b;for(b=0;a;)b++,a&=a-1;return b}function K(a,b){return b<<1|a}
let ia=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,
dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,
formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,
dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],ja=[a=>0===(a.y+a.x)%2,a=>0===a.y%2,a=>0===a.x%3,a=>0===(a.y+a.x)%3,a=>0===(Math.floor(a.y/2)+Math.floor(a.x/3))%2,a=>0===a.x*a.y%
2+a.x*a.y%3,a=>0===(a.y*a.x%2+a.y*a.x%3)%2,a=>0===((a.y+a.x)%2+a.y*a.x%3)%2];
function ka(a,b,c){c=ja[c.dataMask];let d=a.height;var e=17+4*b.versionNumber;let f=x.createEmpty(e,e);f.setRegion(0,0,9,9,!0);f.setRegion(e-8,0,8,9,!0);f.setRegion(0,e-8,9,8,!0);for(var g of b.alignmentPatternCenters)for(var h of b.alignmentPatternCenters)6===g&&6===h||6===g&&h===e-7||g===e-7&&6===h||f.setRegion(g-2,h-2,5,5,!0);f.setRegion(6,9,1,e-17,!0);f.setRegion(9,6,e-17,1,!0);6<b.versionNumber&&(f.setRegion(e-11,0,3,6,!0),f.setRegion(0,e-11,6,3,!0));b=[];h=g=0;e=!0;for(let k=d-1;0<k;k-=2){6===
k&&k--;for(let m=0;m<d;m++){let l=e?d-1-m:m;for(let n=0;2>n;n++){let q=k-n;if(!f.get(q,l)){h++;let r=a.get(q,l);c({y:l,x:q})&&(r=!r);g=g<<1|r;8===h&&(b.push(g),g=h=0)}}}e=!e}return b}
function la(a){var b=a.height,c=Math.floor((b-17)/4);if(6>=c)return I[c-1];c=0;for(var d=5;0<=d;d--)for(var e=b-9;e>=b-11;e--)c=K(a.get(e,d),c);d=0;for(e=5;0<=e;e--)for(let g=b-9;g>=b-11;g--)d=K(a.get(e,g),d);a=Infinity;let f;for(let g of I){if(g.infoBits===c||g.infoBits===d)return g;b=J(c,g.infoBits);b<a&&(f=g,a=b);b=J(d,g.infoBits);b<a&&(f=g,a=b)}if(3>=a)return f}
function ma(a){let b=0;for(var c=0;8>=c;c++)6!==c&&(b=K(a.get(c,8),b));for(c=7;0<=c;c--)6!==c&&(b=K(a.get(8,c),b));var d=a.height;c=0;for(var e=d-1;e>=d-7;e--)c=K(a.get(8,e),c);for(e=d-8;e<d;e++)c=K(a.get(e,8),c);a=Infinity;d=null;for(let {bits:f,formatInfo:g}of ia){if(f===b||f===c)return g;e=J(b,f);e<a&&(d=g,a=e);b!==c&&(e=J(c,f),e<a&&(d=g,a=e))}return 3>=a?d:null}
function na(a,b,c){let d=b.errorCorrectionLevels[c],e=[],f=0;d.ecBlocks.forEach(h=>{for(let k=0;k<h.numBlocks;k++)e.push({numDataCodewords:h.dataCodewordsPerBlock,codewords:[]}),f+=h.dataCodewordsPerBlock+d.ecCodewordsPerBlock});if(a.length<f)return null;a=a.slice(0,f);b=d.ecBlocks[0].dataCodewordsPerBlock;for(c=0;c<b;c++)for(var g of e)g.codewords.push(a.shift());if(1<d.ecBlocks.length)for(g=d.ecBlocks[0].numBlocks,b=d.ecBlocks[1].numBlocks,c=0;c<b;c++)e[g+c].codewords.push(a.shift());for(;0<a.length;)for(let h of e)h.codewords.push(a.shift());
return e}function L(a){let b=la(a);if(!b)return null;var c=ma(a);if(!c)return null;a=ka(a,b,c);var d=na(a,b,c.errorCorrectionLevel);if(!d)return null;c=d.reduce((e,f)=>e+f.numDataCodewords,0);c=new Uint8ClampedArray(c);a=0;for(let e of d){d=ha(e.codewords,e.codewords.length-e.numDataCodewords);if(!d)return null;for(let f=0;f<e.numDataCodewords;f++)c[a++]=d[f]}try{return da(c,b.versionNumber)}catch(e){return null}}
function M(a,b,c,d){var e=a.x-b.x+c.x-d.x;let f=a.y-b.y+c.y-d.y;if(0===e&&0===f)return{a11:b.x-a.x,a12:b.y-a.y,a13:0,a21:c.x-b.x,a22:c.y-b.y,a23:0,a31:a.x,a32:a.y,a33:1};let g=b.x-c.x;var h=d.x-c.x;let k=b.y-c.y,m=d.y-c.y;c=g*m-h*k;h=(e*m-h*f)/c;e=(g*f-e*k)/c;return{a11:b.x-a.x+h*b.x,a12:b.y-a.y+h*b.y,a13:h,a21:d.x-a.x+e*d.x,a22:d.y-a.y+e*d.y,a23:e,a31:a.x,a32:a.y,a33:1}}
function oa(a,b,c,d){a=M(a,b,c,d);return{a11:a.a22*a.a33-a.a23*a.a32,a12:a.a13*a.a32-a.a12*a.a33,a13:a.a12*a.a23-a.a13*a.a22,a21:a.a23*a.a31-a.a21*a.a33,a22:a.a11*a.a33-a.a13*a.a31,a23:a.a13*a.a21-a.a11*a.a23,a31:a.a21*a.a32-a.a22*a.a31,a32:a.a12*a.a31-a.a11*a.a32,a33:a.a11*a.a22-a.a12*a.a21}}
function pa(a,b){var c=oa({x:3.5,y:3.5},{x:b.dimension-3.5,y:3.5},{x:b.dimension-6.5,y:b.dimension-6.5},{x:3.5,y:b.dimension-3.5}),d=M(b.topLeft,b.topRight,b.alignmentPattern,b.bottomLeft),e=d.a11*c.a11+d.a21*c.a12+d.a31*c.a13,f=d.a12*c.a11+d.a22*c.a12+d.a32*c.a13,g=d.a13*c.a11+d.a23*c.a12+d.a33*c.a13,h=d.a11*c.a21+d.a21*c.a22+d.a31*c.a23,k=d.a12*c.a21+d.a22*c.a22+d.a32*c.a23,m=d.a13*c.a21+d.a23*c.a22+d.a33*c.a23,l=d.a11*c.a31+d.a21*c.a32+d.a31*c.a33,n=d.a12*c.a31+d.a22*c.a32+d.a32*c.a33,q=d.a13*
c.a31+d.a23*c.a32+d.a33*c.a33;c=x.createEmpty(b.dimension,b.dimension);d=(r,u)=>{const p=g*r+m*u+q;return{x:(e*r+h*u+l)/p,y:(f*r+k*u+n)/p}};for(let r=0;r<b.dimension;r++)for(let u=0;u<b.dimension;u++){let p=d(u+.5,r+.5);c.set(u,r,a.get(Math.floor(p.x),Math.floor(p.y)))}return{matrix:c,mappingFunction:d}}let N=(a,b)=>Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2));function O(a){return a.reduce((b,c)=>b+c)}
function qa(a,b,c){let d=N(a,b),e=N(b,c),f=N(a,c),g,h,k;e>=d&&e>=f?[g,h,k]=[b,a,c]:f>=e&&f>=d?[g,h,k]=[a,b,c]:[g,h,k]=[a,c,b];0>(k.x-h.x)*(g.y-h.y)-(k.y-h.y)*(g.x-h.x)&&([g,k]=[k,g]);return{bottomLeft:g,topLeft:h,topRight:k}}
function ra(a,b,c,d){d=(O(P(a,c,d,5))/7+O(P(a,b,d,5))/7+O(P(c,a,d,5))/7+O(P(b,a,d,5))/7)/4;if(1>d)throw Error("Invalid module size");b=Math.round(N(a,b)/d);a=Math.round(N(a,c)/d);a=Math.floor((b+a)/2)+7;switch(a%4){case 0:a++;break;case 2:a--}return{dimension:a,moduleSize:d}}
function Q(a,b,c,d){let e=[{x:Math.floor(a.x),y:Math.floor(a.y)}];var f=Math.abs(b.y-a.y)>Math.abs(b.x-a.x);if(f){var g=Math.floor(a.y);var h=Math.floor(a.x);a=Math.floor(b.y);b=Math.floor(b.x)}else g=Math.floor(a.x),h=Math.floor(a.y),a=Math.floor(b.x),b=Math.floor(b.y);let k=Math.abs(a-g),m=Math.abs(b-h),l=Math.floor(-k/2),n=g<a?1:-1,q=h<b?1:-1,r=!0;for(let u=g,p=h;u!==a+n;u+=n){g=f?p:u;h=f?u:p;if(c.get(g,h)!==r&&(r=!r,e.push({x:g,y:h}),e.length===d+1))break;l+=m;if(0<l){if(p===b)break;p+=q;l-=k}}c=
[];for(f=0;f<d;f++)e[f]&&e[f+1]?c.push(N(e[f],e[f+1])):c.push(0);return c}function P(a,b,c,d){let e=b.y-a.y,f=b.x-a.x;b=Q(a,b,c,Math.ceil(d/2));a=Q(a,{x:a.x-f,y:a.y-e},c,Math.ceil(d/2));c=b.shift()+a.shift()-1;return a.concat(c).concat(...b)}function R(a,b){let c=O(a)/O(b),d=0;b.forEach((e,f)=>{d+=Math.pow(a[f]-e*c,2)});return{averageSize:c,error:d}}
function S(a,b,c){try{let d=P(a,{x:-1,y:a.y},c,b.length),e=P(a,{x:a.x,y:-1},c,b.length),f=P(a,{x:Math.max(0,a.x-a.y)-1,y:Math.max(0,a.y-a.x)-1},c,b.length),g=P(a,{x:Math.min(c.width,a.x+a.y)+1,y:Math.min(c.height,a.y+a.x)+1},c,b.length),h=R(d,b),k=R(e,b),m=R(f,b),l=R(g,b),n=(h.averageSize+k.averageSize+m.averageSize+l.averageSize)/4;return Math.sqrt(h.error*h.error+k.error*k.error+m.error*m.error+l.error*l.error)+(Math.pow(h.averageSize-n,2)+Math.pow(k.averageSize-n,2)+Math.pow(m.averageSize-n,2)+
Math.pow(l.averageSize-n,2))/n}catch(d){return Infinity}}function T(a,b){for(var c=Math.round(b.x);a.get(c,Math.round(b.y));)c--;for(var d=Math.round(b.x);a.get(d,Math.round(b.y));)d++;c=(c+d)/2;for(d=Math.round(b.y);a.get(Math.round(c),d);)d--;for(b=Math.round(b.y);a.get(Math.round(c),b);)b++;return{x:c,y:(d+b)/2}}
function sa(a){var b=[],c=[];let d=[];var e=[];for(let p=0;p<=a.height;p++){var f=0,g=!1;let t=[0,0,0,0,0];for(let v=-1;v<=a.width;v++){var h=a.get(v,p);if(h===g)f++;else{t=[t[1],t[2],t[3],t[4],f];f=1;g=h;var k=O(t)/7;k=Math.abs(t[0]-k)<k&&Math.abs(t[1]-k)<k&&Math.abs(t[2]-3*k)<3*k&&Math.abs(t[3]-k)<k&&Math.abs(t[4]-k)<k&&!h;var m=O(t.slice(-3))/3;h=Math.abs(t[2]-m)<m&&Math.abs(t[3]-m)<m&&Math.abs(t[4]-m)<m&&h;if(k){let z=v-t[3]-t[4],y=z-t[2];k={startX:y,endX:z,y:p};m=c.filter(w=>y>=w.bottom.startX&&
y<=w.bottom.endX||z>=w.bottom.startX&&y<=w.bottom.endX||y<=w.bottom.startX&&z>=w.bottom.endX&&1.5>t[2]/(w.bottom.endX-w.bottom.startX)&&.5<t[2]/(w.bottom.endX-w.bottom.startX));0<m.length?m[0].bottom=k:c.push({top:k,bottom:k})}if(h){let z=v-t[4],y=z-t[3];h={startX:y,y:p,endX:z};k=e.filter(w=>y>=w.bottom.startX&&y<=w.bottom.endX||z>=w.bottom.startX&&y<=w.bottom.endX||y<=w.bottom.startX&&z>=w.bottom.endX&&1.5>t[2]/(w.bottom.endX-w.bottom.startX)&&.5<t[2]/(w.bottom.endX-w.bottom.startX));0<k.length?
k[0].bottom=h:e.push({top:h,bottom:h})}}}b.push(...c.filter(v=>v.bottom.y!==p&&2<=v.bottom.y-v.top.y));c=c.filter(v=>v.bottom.y===p);d.push(...e.filter(v=>v.bottom.y!==p));e=e.filter(v=>v.bottom.y===p)}b.push(...c.filter(p=>2<=p.bottom.y-p.top.y));d.push(...e);c=[];for(var l of b)2>l.bottom.y-l.top.y||(b=(l.top.startX+l.top.endX+l.bottom.startX+l.bottom.endX)/4,e=(l.top.y+l.bottom.y+1)/2,a.get(Math.round(b),Math.round(e))&&(f=[l.top.endX-l.top.startX,l.bottom.endX-l.bottom.startX,l.bottom.y-l.top.y+
1],f=O(f)/f.length,g=S({x:Math.round(b),y:Math.round(e)},[1,1,3,1,1],a),c.push({score:g,x:b,y:e,size:f})));if(3>c.length)return null;c.sort((p,t)=>p.score-t.score);l=[];for(b=0;b<Math.min(c.length,5);++b){e=c[b];f=[];for(var n of c)n!==e&&f.push(Object.assign(Object.assign({},n),{score:n.score+Math.pow(n.size-e.size,2)/e.size}));f.sort((p,t)=>p.score-t.score);l.push({points:[e,f[0],f[1]],score:e.score+f[0].score+f[1].score})}l.sort((p,t)=>p.score-t.score);let {topRight:q,topLeft:r,bottomLeft:u}=qa(...l[0].points);
l=U(a,d,q,r,u);n=[];l&&n.push({alignmentPattern:{x:l.alignmentPattern.x,y:l.alignmentPattern.y},bottomLeft:{x:u.x,y:u.y},dimension:l.dimension,topLeft:{x:r.x,y:r.y},topRight:{x:q.x,y:q.y}});l=T(a,q);b=T(a,r);c=T(a,u);(a=U(a,d,l,b,c))&&n.push({alignmentPattern:{x:a.alignmentPattern.x,y:a.alignmentPattern.y},bottomLeft:{x:c.x,y:c.y},topLeft:{x:b.x,y:b.y},topRight:{x:l.x,y:l.y},dimension:a.dimension});return 0===n.length?null:n}
function U(a,b,c,d,e){let f,g;try{({dimension:f,moduleSize:g}=ra(d,c,e,a))}catch(l){return null}var h=c.x-d.x+e.x,k=c.y-d.y+e.y;c=(N(d,e)+N(d,c))/2/g;e=1-3/c;let m={x:d.x+e*(h-d.x),y:d.y+e*(k-d.y)};b=b.map(l=>{const n=(l.top.startX+l.top.endX+l.bottom.startX+l.bottom.endX)/4;l=(l.top.y+l.bottom.y+1)/2;if(a.get(Math.floor(n),Math.floor(l))){var q=S({x:Math.floor(n),y:Math.floor(l)},[1,1,1],a)+N({x:n,y:l},m);return{x:n,y:l,score:q}}}).filter(l=>!!l).sort((l,n)=>l.score-n.score);return{alignmentPattern:15<=
c&&b.length?b[0]:m,dimension:f}}
function V(a){var b=sa(a);if(!b)return null;for(let e of b){b=pa(a,e);var c=b.matrix;if(null==c)c=null;else{var d=L(c);if(d)c=d;else{for(d=0;d<c.width;d++)for(let f=d+1;f<c.height;f++)c.get(d,f)!==c.get(f,d)&&(c.set(d,f,!c.get(d,f)),c.set(f,d,!c.get(f,d)));c=L(c)}}if(c)return{binaryData:c.bytes,data:c.text,chunks:c.chunks,version:c.version,location:{topRightCorner:b.mappingFunction(e.dimension,0),topLeftCorner:b.mappingFunction(0,0),bottomRightCorner:b.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:b.mappingFunction(0,
e.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern},matrix:b.matrix}}return null}let ta={inversionAttempts:"attemptBoth",greyScaleWeights:{red:.2126,green:.7152,blue:.0722,useIntegerApproximation:!1},canOverwriteImage:!0};function W(a,b){Object.keys(b).forEach(c=>{a[c]=b[c]})}
function X(a,b,c,d={}){let e=Object.create(null);W(e,ta);W(e,d);d="onlyInvert"===e.inversionAttempts||"invertFirst"===e.inversionAttempts;var f="attemptBoth"===e.inversionAttempts||d;var g=e.greyScaleWeights,h=e.canOverwriteImage,k=b*c;if(a.length!==4*k)throw Error("Malformed data passed to binarizer.");var m=0;if(h){var l=new Uint8ClampedArray(a.buffer,m,k);m+=k}l=new A(b,c,l);if(g.useIntegerApproximation)for(var n=0;n<c;n++)for(var q=0;q<b;q++){var r=4*(n*b+q);l.set(q,n,g.red*a[r]+g.green*a[r+1]+
g.blue*a[r+2]+128>>8)}else for(n=0;n<c;n++)for(q=0;q<b;q++)r=4*(n*b+q),l.set(q,n,g.red*a[r]+g.green*a[r+1]+g.blue*a[r+2]);g=Math.ceil(b/8);n=Math.ceil(c/8);q=g*n;if(h){var u=new Uint8ClampedArray(a.buffer,m,q);m+=q}u=new A(g,n,u);for(q=0;q<n;q++)for(r=0;r<g;r++){var p=Infinity,t=0;for(var v=0;8>v;v++)for(let w=0;8>w;w++){let aa=l.get(8*r+w,8*q+v);p=Math.min(p,aa);t=Math.max(t,aa)}v=(p+t)/2;v=Math.min(255,1.11*v);24>=t-p&&(v=p/2,0<q&&0<r&&(t=(u.get(r,q-1)+2*u.get(r-1,q)+u.get(r-1,q-1))/4,p<t&&(v=t)));
u.set(r,q,v)}h?(q=new Uint8ClampedArray(a.buffer,m,k),m+=k,q=new x(q,b)):q=x.createEmpty(b,c);r=null;f&&(h?(a=new Uint8ClampedArray(a.buffer,m,k),r=new x(a,b)):r=x.createEmpty(b,c));for(b=0;b<n;b++)for(a=0;a<g;a++){c=g-3;c=2>a?2:a>c?c:a;h=n-3;h=2>b?2:b>h?h:b;k=0;for(m=-2;2>=m;m++)for(p=-2;2>=p;p++)k+=u.get(c+m,h+p);c=k/25;for(h=0;8>h;h++)for(k=0;8>k;k++)m=8*a+h,p=8*b+k,t=l.get(m,p),q.set(m,p,t<=c),f&&r.set(m,p,!(t<=c))}f=f?{binarized:q,inverted:r}:{binarized:q};let {binarized:z,inverted:y}=f;(f=V(d?
y:z))||"attemptBoth"!==e.inversionAttempts&&"invertFirst"!==e.inversionAttempts||(f=V(d?z:y));return f}X.default=X;let Y="dontInvert",Z={red:77,green:150,blue:29,useIntegerApproximation:!0};
self.onmessage=a=>{let b=a.data.id,c=a.data.data;switch(a.data.type){case "decode":(a=X(c.data,c.width,c.height,{inversionAttempts:Y,greyScaleWeights:Z}))?self.postMessage({id:b,type:"qrResult",data:a.data,cornerPoints:[a.location.topLeftCorner,a.location.topRightCorner,a.location.bottomRightCorner,a.location.bottomLeftCorner]}):self.postMessage({id:b,type:"qrResult",data:null});break;case "grayscaleWeights":Z.red=c.red;Z.green=c.green;Z.blue=c.blue;Z.useIntegerApproximation=c.useIntegerApproximation;
break;case "inversionMode":switch(c){case "original":Y="dontInvert";break;case "invert":Y="onlyInvert";break;case "both":Y="attemptBoth";break;default:throw Error("Invalid inversion mode");}break;case "close":self.close()}}
`]), { type: "application/javascript" }));
    }
  });

  // node_modules/qr-scanner/qr-scanner.umd.min.js
  var require_qr_scanner_umd_min = __commonJS({
    "node_modules/qr-scanner/qr-scanner.umd.min.js"(exports, module) {
      "use strict";
      (function(e, a) {
        "object" === typeof exports && "undefined" !== typeof module ? module.exports = a() : "function" === typeof define && define.amd ? define(a) : (e = "undefined" !== typeof globalThis ? globalThis : e || self, e.QrScanner = a());
      })(exports, function() {
        class e {
          constructor(a, b, c, d, f) {
            this._legacyCanvasSize = e.DEFAULT_CANVAS_SIZE;
            this._preferredCamera = "environment";
            this._maxScansPerSecond = 25;
            this._lastScanTimestamp = -1;
            this._destroyed = this._flashOn = this._paused = this._active = false;
            this.$video = a;
            this.$canvas = document.createElement("canvas");
            c && "object" === typeof c ? this._onDecode = b : (c || d || f ? console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future") : console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), this._legacyOnDecode = b);
            b = "object" === typeof c ? c : {};
            this._onDecodeError = b.onDecodeError || ("function" === typeof c ? c : this._onDecodeError);
            this._calculateScanRegion = b.calculateScanRegion || ("function" === typeof d ? d : this._calculateScanRegion);
            this._preferredCamera = b.preferredCamera || f || this._preferredCamera;
            this._legacyCanvasSize = "number" === typeof c ? c : "number" === typeof d ? d : this._legacyCanvasSize;
            this._maxScansPerSecond = b.maxScansPerSecond || this._maxScansPerSecond;
            this._onPlay = this._onPlay.bind(this);
            this._onLoadedMetaData = this._onLoadedMetaData.bind(this);
            this._onVisibilityChange = this._onVisibilityChange.bind(this);
            this._updateOverlay = this._updateOverlay.bind(this);
            a.disablePictureInPicture = true;
            a.playsInline = true;
            a.muted = true;
            let h = false;
            a.hidden && (a.hidden = false, h = true);
            document.body.contains(a) || (document.body.appendChild(a), h = true);
            c = a.parentElement;
            if (b.highlightScanRegion || b.highlightCodeOutline) {
              d = !!b.overlay;
              this.$overlay = b.overlay || document.createElement("div");
              f = this.$overlay.style;
              f.position = "absolute";
              f.display = "none";
              f.pointerEvents = "none";
              this.$overlay.classList.add("scan-region-highlight");
              if (!d && b.highlightScanRegion) {
                this.$overlay.innerHTML = '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
                try {
                  this.$overlay.firstElementChild.animate({ transform: ["scale(.98)", "scale(1.01)"] }, { duration: 400, iterations: Infinity, direction: "alternate", easing: "ease-in-out" });
                } catch (m) {
                }
                c.insertBefore(this.$overlay, this.$video.nextSibling);
              }
              b.highlightCodeOutline && (this.$overlay.insertAdjacentHTML("beforeend", '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'), this.$codeOutlineHighlight = this.$overlay.lastElementChild);
            }
            this._scanRegion = this._calculateScanRegion(a);
            requestAnimationFrame(() => {
              let m = window.getComputedStyle(a);
              "none" === m.display && (a.style.setProperty("display", "block", "important"), h = true);
              "visible" !== m.visibility && (a.style.setProperty("visibility", "visible", "important"), h = true);
              h && (console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."), a.style.opacity = "0", a.style.width = "0", a.style.height = "0", this.$overlay && this.$overlay.parentElement && this.$overlay.parentElement.removeChild(this.$overlay), delete this.$overlay, delete this.$codeOutlineHighlight);
              this.$overlay && this._updateOverlay();
            });
            a.addEventListener("play", this._onPlay);
            a.addEventListener("loadedmetadata", this._onLoadedMetaData);
            document.addEventListener("visibilitychange", this._onVisibilityChange);
            window.addEventListener("resize", this._updateOverlay);
            this._qrEnginePromise = e.createQrEngine();
          }
          static set WORKER_PATH(a) {
            console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.");
          }
          static async hasCamera() {
            try {
              return !!(await e.listCameras(false)).length;
            } catch (a) {
              return false;
            }
          }
          static async listCameras(a = false) {
            if (!navigator.mediaDevices) return [];
            let b = async () => (await navigator.mediaDevices.enumerateDevices()).filter((d) => "videoinput" === d.kind), c;
            try {
              a && (await b()).every((d) => !d.label) && (c = await navigator.mediaDevices.getUserMedia({ audio: false, video: true }));
            } catch (d) {
            }
            try {
              return (await b()).map((d, f) => ({ id: d.deviceId, label: d.label || (0 === f ? "Default Camera" : `Camera ${f + 1}`) }));
            } finally {
              c && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), e._stopVideoStream(c));
            }
          }
          async hasFlash() {
            let a;
            try {
              if (this.$video.srcObject) {
                if (!(this.$video.srcObject instanceof MediaStream)) return false;
                a = this.$video.srcObject;
              } else a = (await this._getCameraStream()).stream;
              return "torch" in a.getVideoTracks()[0].getSettings();
            } catch (b) {
              return false;
            } finally {
              a && a !== this.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), e._stopVideoStream(a));
            }
          }
          isFlashOn() {
            return this._flashOn;
          }
          async toggleFlash() {
            this._flashOn ? await this.turnFlashOff() : await this.turnFlashOn();
          }
          async turnFlashOn() {
            if (!this._flashOn && !this._destroyed && (this._flashOn = true, this._active && !this._paused)) try {
              if (!await this.hasFlash()) throw "No flash available";
              await this.$video.srcObject.getVideoTracks()[0].applyConstraints({ advanced: [{ torch: true }] });
            } catch (a) {
              throw this._flashOn = false, a;
            }
          }
          async turnFlashOff() {
            this._flashOn && (this._flashOn = false, await this._restartVideoStream());
          }
          destroy() {
            this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData);
            this.$video.removeEventListener("play", this._onPlay);
            document.removeEventListener(
              "visibilitychange",
              this._onVisibilityChange
            );
            window.removeEventListener("resize", this._updateOverlay);
            this._destroyed = true;
            this._flashOn = false;
            this.stop();
            e._postWorkerMessage(this._qrEnginePromise, "close");
          }
          async start() {
            if (this._destroyed) throw Error("The QR scanner can not be started as it had been destroyed.");
            if (!this._active || this._paused) {
              if ("https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https."), this._active = true, !document.hidden) if (this._paused = false, this.$video.srcObject) await this.$video.play();
              else try {
                let { stream: a, facingMode: b } = await this._getCameraStream();
                !this._active || this._paused ? e._stopVideoStream(a) : (this._setVideoMirror(b), this.$video.srcObject = a, await this.$video.play(), this._flashOn && (this._flashOn = false, this.turnFlashOn().catch(() => {
                })));
              } catch (a) {
                if (!this._paused) throw this._active = false, a;
              }
            }
          }
          stop() {
            this.pause();
            this._active = false;
          }
          async pause(a = false) {
            this._paused = true;
            if (!this._active) return true;
            this.$video.pause();
            this.$overlay && (this.$overlay.style.display = "none");
            let b = () => {
              this.$video.srcObject instanceof MediaStream && (e._stopVideoStream(this.$video.srcObject), this.$video.srcObject = null);
            };
            if (a) return b(), true;
            await new Promise((c) => setTimeout(c, 300));
            if (!this._paused) return false;
            b();
            return true;
          }
          async setCamera(a) {
            a !== this._preferredCamera && (this._preferredCamera = a, await this._restartVideoStream());
          }
          static async scanImage(a, b, c, d, f = false, h = false) {
            let m, n = false;
            b && ("scanRegion" in b || "qrEngine" in b || "canvas" in b || "disallowCanvasResizing" in b || "alsoTryWithoutScanRegion" in b || "returnDetailedScanResult" in b) ? (m = b.scanRegion, c = b.qrEngine, d = b.canvas, f = b.disallowCanvasResizing || false, h = b.alsoTryWithoutScanRegion || false, n = true) : b || c || d || f || h ? console.warn("You're using a deprecated api for scanImage which will be removed in the future.") : console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");
            b = !!c;
            try {
              let p, k;
              [c, p] = await Promise.all([c || e.createQrEngine(), e._loadImage(a)]);
              [d, k] = e._drawToCanvas(p, m, d, f);
              let q;
              if (c instanceof Worker) {
                let g = c;
                b || e._postWorkerMessageSync(g, "inversionMode", "both");
                q = await new Promise((l, v) => {
                  let w, u, r, y = -1;
                  u = (t) => {
                    t.data.id === y && (g.removeEventListener("message", u), g.removeEventListener("error", r), clearTimeout(w), null !== t.data.data ? l({ data: t.data.data, cornerPoints: e._convertPoints(t.data.cornerPoints, m) }) : v(e.NO_QR_CODE_FOUND));
                  };
                  r = (t) => {
                    g.removeEventListener("message", u);
                    g.removeEventListener("error", r);
                    clearTimeout(w);
                    v("Scanner error: " + (t ? t.message || t : "Unknown Error"));
                  };
                  g.addEventListener("message", u);
                  g.addEventListener("error", r);
                  w = setTimeout(() => r("timeout"), 1e4);
                  let x = k.getImageData(0, 0, d.width, d.height);
                  y = e._postWorkerMessageSync(g, "decode", x, [x.data.buffer]);
                });
              } else q = await Promise.race([new Promise((g, l) => window.setTimeout(() => l("Scanner error: timeout"), 1e4)), (async () => {
                try {
                  var [g] = await c.detect(d);
                  if (!g) throw e.NO_QR_CODE_FOUND;
                  return { data: g.rawValue, cornerPoints: e._convertPoints(g.cornerPoints, m) };
                } catch (l) {
                  g = l.message || l;
                  if (/not implemented|service unavailable/.test(g)) return e._disableBarcodeDetector = true, e.scanImage(a, { scanRegion: m, canvas: d, disallowCanvasResizing: f, alsoTryWithoutScanRegion: h });
                  throw `Scanner error: ${g}`;
                }
              })()]);
              return n ? q : q.data;
            } catch (p) {
              if (!m || !h) throw p;
              let k = await e.scanImage(a, { qrEngine: c, canvas: d, disallowCanvasResizing: f });
              return n ? k : k.data;
            } finally {
              b || e._postWorkerMessage(c, "close");
            }
          }
          setGrayscaleWeights(a, b, c, d = true) {
            e._postWorkerMessage(this._qrEnginePromise, "grayscaleWeights", {
              red: a,
              green: b,
              blue: c,
              useIntegerApproximation: d
            });
          }
          setInversionMode(a) {
            e._postWorkerMessage(this._qrEnginePromise, "inversionMode", a);
          }
          static async createQrEngine(a) {
            a && console.warn("Specifying a worker path is not required and not supported anymore.");
            a = () => Promise.resolve().then(() => (init_qr_scanner_worker_min(), qr_scanner_worker_min_exports)).then((c) => c.createWorker());
            if (!(!e._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (await BarcodeDetector.getSupportedFormats()).includes("qr_code"))) return a();
            let b = navigator.userAgentData;
            return b && b.brands.some(({ brand: c }) => /Chromium/i.test(c)) && /mac ?OS/i.test(b.platform) && await b.getHighEntropyValues(["architecture", "platformVersion"]).then(({ architecture: c, platformVersion: d }) => /arm/i.test(c || "arm") && 13 <= parseInt(d || "13")).catch(() => true) ? a() : new BarcodeDetector({ formats: ["qr_code"] });
          }
          _onPlay() {
            this._scanRegion = this._calculateScanRegion(this.$video);
            this._updateOverlay();
            this.$overlay && (this.$overlay.style.display = "");
            this._scanFrame();
          }
          _onLoadedMetaData() {
            this._scanRegion = this._calculateScanRegion(this.$video);
            this._updateOverlay();
          }
          _onVisibilityChange() {
            document.hidden ? this.pause() : this._active && this.start();
          }
          _calculateScanRegion(a) {
            let b = Math.round(2 / 3 * Math.min(a.videoWidth, a.videoHeight));
            return { x: Math.round((a.videoWidth - b) / 2), y: Math.round((a.videoHeight - b) / 2), width: b, height: b, downScaledWidth: this._legacyCanvasSize, downScaledHeight: this._legacyCanvasSize };
          }
          _updateOverlay() {
            requestAnimationFrame(() => {
              if (this.$overlay) {
                var a = this.$video, b = a.videoWidth, c = a.videoHeight, d = a.offsetWidth, f = a.offsetHeight, h = a.offsetLeft, m = a.offsetTop, n = window.getComputedStyle(a), p = n.objectFit, k = b / c, q = d / f;
                switch (p) {
                  case "none":
                    var g = b;
                    var l = c;
                    break;
                  case "fill":
                    g = d;
                    l = f;
                    break;
                  default:
                    ("cover" === p ? k > q : k < q) ? (l = f, g = l * k) : (g = d, l = g / k), "scale-down" === p && (g = Math.min(g, b), l = Math.min(l, c));
                }
                var [v, w] = n.objectPosition.split(" ").map((r, y) => {
                  const x = parseFloat(r);
                  return r.endsWith("%") ? (y ? f - l : d - g) * x / 100 : x;
                });
                n = this._scanRegion.width || b;
                q = this._scanRegion.height || c;
                p = this._scanRegion.x || 0;
                var u = this._scanRegion.y || 0;
                k = this.$overlay.style;
                k.width = `${n / b * g}px`;
                k.height = `${q / c * l}px`;
                k.top = `${m + w + u / c * l}px`;
                c = /scaleX\(-1\)/.test(a.style.transform);
                k.left = `${h + (c ? d - v - g : v) + (c ? b - p - n : p) / b * g}px`;
                k.transform = a.style.transform;
              }
            });
          }
          static _convertPoints(a, b) {
            if (!b) return a;
            let c = b.x || 0, d = b.y || 0, f = b.width && b.downScaledWidth ? b.width / b.downScaledWidth : 1;
            b = b.height && b.downScaledHeight ? b.height / b.downScaledHeight : 1;
            for (let h of a) h.x = h.x * f + c, h.y = h.y * b + d;
            return a;
          }
          _scanFrame() {
            !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)(async () => {
              if (!(1 >= this.$video.readyState)) {
                var a = Date.now() - this._lastScanTimestamp, b = 1e3 / this._maxScansPerSecond;
                a < b && await new Promise((d) => setTimeout(d, b - a));
                this._lastScanTimestamp = Date.now();
                try {
                  var c = await e.scanImage(this.$video, { scanRegion: this._scanRegion, qrEngine: this._qrEnginePromise, canvas: this.$canvas });
                } catch (d) {
                  if (!this._active) return;
                  this._onDecodeError(d);
                }
                !e._disableBarcodeDetector || await this._qrEnginePromise instanceof Worker || (this._qrEnginePromise = e.createQrEngine());
                c ? (this._onDecode ? this._onDecode(c) : this._legacyOnDecode && this._legacyOnDecode(c.data), this.$codeOutlineHighlight && (clearTimeout(this._codeOutlineHighlightRemovalTimeout), this._codeOutlineHighlightRemovalTimeout = void 0, this.$codeOutlineHighlight.setAttribute("viewBox", `${this._scanRegion.x || 0} ${this._scanRegion.y || 0} ${this._scanRegion.width || this.$video.videoWidth} ${this._scanRegion.height || this.$video.videoHeight}`), this.$codeOutlineHighlight.firstElementChild.setAttribute(
                  "points",
                  c.cornerPoints.map(({ x: d, y: f }) => `${d},${f}`).join(" ")
                ), this.$codeOutlineHighlight.style.display = "")) : this.$codeOutlineHighlight && !this._codeOutlineHighlightRemovalTimeout && (this._codeOutlineHighlightRemovalTimeout = setTimeout(() => this.$codeOutlineHighlight.style.display = "none", 100));
              }
              this._scanFrame();
            });
          }
          _onDecodeError(a) {
            a !== e.NO_QR_CODE_FOUND && console.log(a);
          }
          async _getCameraStream() {
            if (!navigator.mediaDevices) throw "Camera not found.";
            let a = /^(environment|user)$/.test(this._preferredCamera) ? "facingMode" : "deviceId", b = [{ width: { min: 1024 } }, { width: { min: 768 } }, {}], c = b.map((d) => Object.assign({}, d, { [a]: { exact: this._preferredCamera } }));
            for (let d of [...c, ...b]) try {
              let f = await navigator.mediaDevices.getUserMedia({ video: d, audio: false }), h = this._getFacingMode(f) || (d.facingMode ? this._preferredCamera : "environment" === this._preferredCamera ? "user" : "environment");
              return { stream: f, facingMode: h };
            } catch (f) {
            }
            throw "Camera not found.";
          }
          async _restartVideoStream() {
            let a = this._paused;
            await this.pause(true) && !a && this._active && await this.start();
          }
          static _stopVideoStream(a) {
            for (let b of a.getTracks()) b.stop(), a.removeTrack(b);
          }
          _setVideoMirror(a) {
            this.$video.style.transform = "scaleX(" + ("user" === a ? -1 : 1) + ")";
          }
          _getFacingMode(a) {
            return (a = a.getVideoTracks()[0]) ? /rear|back|environment/i.test(a.label) ? "environment" : /front|user|face/i.test(a.label) ? "user" : null : null;
          }
          static _drawToCanvas(a, b, c, d = false) {
            c = c || document.createElement("canvas");
            let f = b && b.x ? b.x : 0, h = b && b.y ? b.y : 0, m = b && b.width ? b.width : a.videoWidth || a.width, n = b && b.height ? b.height : a.videoHeight || a.height;
            d || (d = b && b.downScaledWidth ? b.downScaledWidth : m, b = b && b.downScaledHeight ? b.downScaledHeight : n, c.width !== d && (c.width = d), c.height !== b && (c.height = b));
            b = c.getContext("2d", { alpha: false });
            b.imageSmoothingEnabled = false;
            b.drawImage(a, f, h, m, n, 0, 0, c.width, c.height);
            return [c, b];
          }
          static async _loadImage(a) {
            if (a instanceof Image) return await e._awaitImageLoad(a), a;
            if (a instanceof HTMLVideoElement || a instanceof HTMLCanvasElement || a instanceof SVGImageElement || "OffscreenCanvas" in window && a instanceof OffscreenCanvas || "ImageBitmap" in window && a instanceof ImageBitmap) return a;
            if (a instanceof File || a instanceof Blob || a instanceof URL || "string" === typeof a) {
              let b = new Image();
              b.src = a instanceof File || a instanceof Blob ? URL.createObjectURL(a) : a.toString();
              try {
                return await e._awaitImageLoad(b), b;
              } finally {
                (a instanceof File || a instanceof Blob) && URL.revokeObjectURL(b.src);
              }
            } else throw "Unsupported image type.";
          }
          static async _awaitImageLoad(a) {
            a.complete && 0 !== a.naturalWidth || await new Promise((b, c) => {
              let d = (f) => {
                a.removeEventListener("load", d);
                a.removeEventListener("error", d);
                f instanceof ErrorEvent ? c("Image load error") : b();
              };
              a.addEventListener("load", d);
              a.addEventListener("error", d);
            });
          }
          static async _postWorkerMessage(a, b, c, d) {
            return e._postWorkerMessageSync(await a, b, c, d);
          }
          static _postWorkerMessageSync(a, b, c, d) {
            if (!(a instanceof Worker)) return -1;
            let f = e._workerMessageId++;
            a.postMessage({ id: f, type: b, data: c }, d);
            return f;
          }
        }
        e.DEFAULT_CANVAS_SIZE = 400;
        e.NO_QR_CODE_FOUND = "No QR code found";
        e._disableBarcodeDetector = false;
        e._workerMessageId = 0;
        return e;
      });
    }
  });

  // index.js
  var { TOTP } = require_cjs();
  var QrScanner = require_qr_scanner_umd_min();
  function generateTotp(secret) {
    const { otp, expires } = TOTP.generate(secret);
    return { otp, expires };
  }
  document.getElementById("insert-credential").addEventListener("click", async () => {
    const qrCodeInput = document.getElementById("qr-code-input");
    const qr = await QrScanner.scanImage(qrCodeInput.files[0]);
    const urlStructure = qr.replace("otpauth://totp/", "").split("?");
    const credential = Object.fromEntries(new URLSearchParams(urlStructure[1]).entries());
    credential.name = decodeURIComponent(urlStructure[0]);
    localStorage.setItem(`cred_${credential.secret}`, JSON.stringify(credential));
    fetchAllCreds();
  });
  document.getElementById("delete-all-credentials").addEventListener("click", () => {
    if (confirm("Are you sure to delete all credentials?")) {
      localStorage.clear();
      alert("all credentials deleted successfully");
    }
    fetchAllCreds();
  });
  var fetchAllCreds = () => {
    const creds = Object.entries(localStorage);
    const savedCredEl = document.getElementById("saved-credentials");
    savedCredEl.textContent = "";
    creds.forEach((cred) => {
      const parsedCred = JSON.parse(cred[1]);
      const li = document.createElement("li");
      const totp = generateTotp(parsedCred.secret);
      const expiredTime = totp.expires;
      let secondsLeft = Math.ceil(Math.abs(expiredTime - (/* @__PURE__ */ new Date()).getTime()) / 1e3) - 1;
      const p = document.createElement("p");
      p.innerText = parsedCred.name;
      const textSecondsLeft = document.createElement("span");
      textSecondsLeft.style.width = "10%";
      textSecondsLeft.style.marginRight = "10px";
      textSecondsLeft.innerText = secondsLeft;
      const input = document.createElement("input");
      input.setAttribute("disabled", true);
      input.setAttribute("value", totp.otp);
      input.style.width = "30%";
      input.style.height = "30px";
      input.style.textAlign = "center";
      input.style.fontSize = "20px";
      const buttonCopy = document.createElement("button");
      buttonCopy.style.width = "20%";
      buttonCopy.style.marginLeft = "10px";
      buttonCopy.style.height = "30px";
      buttonCopy.innerText = "copy";
      buttonCopy.addEventListener("click", async () => {
        await navigator.clipboard.writeText(input.value);
        alert("code copied to clipboard!");
      });
      setInterval(() => {
        textSecondsLeft.innerText = secondsLeft--;
        if (secondsLeft <= -1) {
          const totp2 = generateTotp(parsedCred.secret);
          input.setAttribute("value", totp2.otp);
          const newExpiredTime = totp2.expires;
          secondsLeft = Math.ceil(Math.abs(newExpiredTime - (/* @__PURE__ */ new Date()).getTime()) / 1e3) - 1;
        }
      }, 1e3);
      li.append(p);
      li.append(textSecondsLeft);
      li.append(input);
      li.append(buttonCopy);
      savedCredEl.appendChild(li);
    });
  };
  fetchAllCreds();
})();
