//v8 © 2010 Tynt
var Tynt = Tynt || [];
if (typeof Tynt.TCL == "undefined") {
	(function() {
		var Y = function() {
			var h = document, p = h.body, q = h.documentElement, O = eval("/*@cc_on!@*/false"), y = "w."
					+ (Tynt.e || "") + "ic.tynt.com", P = "p." + (Tynt.e || "")
					+ "ic.tynt.com", F = function(a, b) {
				for ( var c = "", e = 0; e < b; e++)
					c += a;
				return c
			}, z = F("a", 50), A = function(a) {
				return a.replace(/^\s+|\s+$/g, "")
			}, Q = function(a, b, c) {
				a = h.createElement(a);
				for ( var e in b)
					if (b.hasOwnProperty(e))
						a[e] = b[e];
				for ( var g in c)
					if (c.hasOwnProperty(g))
						a.style[g] = c[g];
				return a
			}, B, r;
			if (window.addEventListener) {
				B = function(a, b, c) {
					a.addEventListener(b, c, false)
				};
				r = function(a, b, c) {
					a.removeEventListener(b, c, false)
				}
			} else {
				B = function(a, b, c) {
					a.attachEvent("on" + b, c)
				};
				r = function(a, b, c) {
					a.detachEvent("on" + b, c)
				}
			}
			var R = function(a, b) {
				var c = window.location.hostname.split("."), e = 2;
				do {
					var g = c.slice(c.length - e, c.length).join(".");
					h.cookie = a + ";path=/;domain=." + g + ";" + b;
					e++
				} while (h.cookie.indexOf(a) == -1 && e <= c.length);
				if (h.cookie.indexOf(a) == -1)
					h.cookie = a + ";path=/;" + b
			}, l = function(a, b) {
				var c = [], e = function(f, d) {
					c.push( [ f, d ])
				}, g = function(f, d) {
					var k = Q("img", {
						width : 0,
						height : 0,
						src : "http://"
								+ f.replace("id=" + z, "id=" + Tynt.join("~"))
					}, {
						position : "absolute",
						top : "0"
					});
					if (window.addEventListener) {
						k.addEventListener("load", function(i) {
							i.target.parentNode.removeChild(i.target)
						}, false);
						k.addEventListener("error", function(i) {
							d && d();
							i.target.parentNode.removeChild(i.target)
						}, false)
					} else {
						k.attachEvent("onload", function(i) {
							i.srcElement.parentNode.removeChild(i.srcElement)
						});
						k.attachEvent("onerror", function(i) {
							d && d();
							i.srcElement.parentNode.removeChild(i.srcElement)
						})
					}
					p.insertBefore(k, p.firstChild)
				};
				if (h.readyState == "complete")
					l = g;
				else {
					l = e;
					B(window, "load", function() {
						setTimeout(function() {
							if (typeof h.readyState == "undefined" && !O)
								h.readyState = "complete";
							l = g;
							for ( var f = 0; f < c.length; f++)
								l(c[f][0], c[f][1]);
							c = null
						}, 10)
					})
				}
				l(a, b)
			}, G = function(a) {
				var b = [], c = "";
				for ( var e in a) {
					b.push(c, e, "=", a[e]);
					c = "&"
				}
				return b.join("")
			}, I = function(a) {
				for ( var b = 0, c = a.length < 100 ? a.length : 100, e = 0; e < c; e++)
					b += a.charCodeAt(e);
				a = Math.floor(Math.random() * 3844);
				c = Math.abs((new Date).getTime() - 12281184E5);
				return H(c, 7) + H((b + a) % 3844, 2)
			}, J = function(a) {
				if (a < 62)
					return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
							.charAt(this);
				else {
					var b = Math.floor(a / 62);
					a = a - b * 62;
					return b >= 62 ? J(b)
							+ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
									.charAt(a)
							: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
									.charAt(b)
									+ "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
											.charAt(a)
				}
			}, H = function(a, b) {
				var c = J(a);
				return F("0", b - c.length) + c
			}, K = A((h.title || window.location.hostname).toString()).replace(
					RegExp(window.location.hash, "g"), ""), S = function() {
				for ( var a = h.getElementsByTagName("link"), b = 0; b < a.length; b++)
					if (a[b].getAttribute("rel")
							&& a[b].getAttribute("rel").match("canonical")) {
						a = a[b].getAttribute("href");
						b = window.location.protocol + "//"
								+ window.location.host
								+ window.location.pathname;
						var c = h.getElementsByTagName("base")[0];
						if (c)
							b = c.getAttribute("href");
						if (!a.match(/^http/)) {
							b = a.charAt(0) != "/" ? b.slice(0, b
									.lastIndexOf("/") + 1) : b.slice(0, b
									.indexOf("/", 9));
							a = b + a
						}
						return a
					}
				return ""
			}, L = function(a) {
				return a.replace(/^https?:\/\//, "")
			}, T = function(a, b) {
				for ( var c = b + "=", e = a.split(";"), g = 0; g < e.length; g++) {
					for ( var f = e[g]; f.charAt(0) == " ";)
						f = f.substring(1, f.length);
					if (f.indexOf(c) == 0)
						return f.substring(c.length, f.length)
				}
				return null
			}, U = function() {
				var a = T(h.cookie, "tracertraffic"), b = encodeURIComponent(L(S())), c = h.location.hash;
				c = /tynt=/.test(c) ? c.match(/tynt=?([^?&$#]*)/)[1] : false;
				var e = P + "/b/p?id=" + z + (a ? "&et=" + a : "")
						+ (c ? "&a=" + c : "") + "&ts=" + (new Date).getTime(), g = e
						+ (b ? "&cu=" + b : ""), f = g
						+ (h.referrer ? "&r="
								+ encodeURIComponent(L(h.referrer)) : "");
				a = f + "&t=" + encodeURIComponent(K);
				l(a, function() {
					l(f, function() {
						l(g, function() {
							l(e)
						})
					})
				})
			};
			r = function() {
				var a = [];
				return function(b) {
					for ( var c = a.length - 1; c >= 0; c--)
						if (a[c] == b)
							return false;
					a.unshift(b);
					a.length > 3 && a.pop();
					return true
				}
			};
			var V = r(), W = r(), X = function() {
				var a, b = function() {
					window.removeEventListener("blur", b, false);
					C(a);
					return true
				};
				return function(c) {
					a = c.target || c.srcElement;
					window.removeEventListener("blur", b, false);
					if (a.nodeName == "IMG" && a.parentNode.nodeName != "A") {
						window.addEventListener("blur", b, false);
						window.setTimeout(function() {
							h.removeEventListener("blur", b, false)
						}, 1E4)
					}
					return true
				}
			}(), M = function(a) {
				C(a.target || a.srcElement)
			}, v = null, N = function(a) {
				a = a.target || a.srcElement;
				v = a.nodeName == "IMG" ? a : null
			}, D = function() {
				var a = function(d) {
					return {
						x : typeof d.pageX == "number" ? d.pageX
								- (q.scrollLeft ? q.scrollLeft : p.scrollLeft)
								: d.clientX,
						y : typeof d.pageY == "number" ? d.pageY
								- (q.scrollTop ? q.scrollTop : p.scrollTop)
								: d.clientY
					}
				}, b = function(d) {
					d = a(d);
					return d.x <= 0 || d.y <= 0 || d.x >= p.clientWidth
							|| d.y >= p.clientHeight
				}, c = function(d) {
					d = a(d);
					return d.x <= 0 || d.y <= 0 || d.x >= q.clientWidth
							|| d.y >= q.clientHeight
				}, e = function(d) {
					return d.target.nodeName == "#document"
				}, g = function(d) {
					d = a(d);
					return d.x <= 4 || d.y <= 4 || d.x >= q.clientWidth - 4
							|| d.y >= q.clientHeight - 4
				}, f = function(d) {
					f = window.navigator.userAgent.match("MSIE") ? !h.compatMode
							|| h.compatMode.indexOf("CSS") == -1 ? b : c
							: window.navigator.userAgent.match("Firefox") ? e
									: g;
					f(d)
				};
				return function(d) {
					if (v && f(d)) {
						C(v);
						v = null
					}
					return true
				}
			}();
			if (Tynt.c)
				r = function() {
				};
			else {
				Tynt.c = true;
				r = function() {
					var a = true, b, c = function(e, g) {
						var f;
						f = (f = A(g)) ? f.split(/\s+/i).length : 0;
						var d = {
							id : z,
							wc : f,
							c : g,
							f : a ? 1 : 0,
							t : K
						};
						for ( var k in e)
							if (e.hasOwnProperty(k))
								d[k] = e[k];
						a = false;
						k = d.trace_type;
						delete d.trace_type;
						f = d.g;
						delete d.g;
						for ( var i = [], u = [ "id", "wc", "f", "w", "h", "t",
								"c" ], m = 0; m < u.length; m++) {
							var n = u[m], o = d[n];
							o
									&& i.push( [
											n,
											encodeURIComponent(o).replace(
													/\'/g, "%27") ]);
							delete d[n]
						}
						for ( var j in d)
							if (d.hasOwnProperty(j))
								(u = d[j])
										&& i.push( [
												j,
												encodeURIComponent(u).replace(
														/\'/g, "%27") ]);
						j = [];
						d = 2048 - (("http://" + y + "/a/t/x#?").length
								+ (3 + f.length) + 5);
						u = i.length;
						m = 0;
						var t, w, E, x, s = n = o = 0;
						for (j[s] = {
							g : f,
							tp : null
						}; m < u;) {
							t = i[m][0];
							E = t.length + 2;
							w = d - E - n;
							if (w > 0) {
								j[s][t] = i[m][1].substring(o, o + w);
								x = j[s][t].slice(-2).indexOf("%");
								if (x > -1) {
									j[s][t] = i[m][1].substring(o, o + w - 2
											+ x);
									n += x + 2
								}
								n += j[s][t].length + E;
								o += j[s][t].length
							} else
								n = d;
							if (n >= d) {
								j[++s] = {
									g : f,
									p : s
								};
								n = 0
							}
							if (o >= i[m][1].length) {
								m++;
								o = 0
							}
						}
						j[0].tp = j.length;
						l(y + "/b/t/" + k + "?" + G(j[0]));
						for (f = 1; f < j.length; f++)
							l(y + "/b/x/" + k + "?" + G(j[f]))
					};
					if (window.addEventListener) {
						window.navigator.userAgent.match("Firefox/2")
								|| p.addEventListener("copy", M, false);
						window.addEventListener("mousedown", N, false);
						window.addEventListener("dragleave", D, false);
						window.addEventListener("dragexit", D, false);
						h.addEventListener("contextmenu", X, false)
					} else {
						p.attachEvent("oncopy", M);
						h.getElementsByTagName("html")[0].attachEvent(
								"ondragleave", D);
						p.attachEvent("onmousedown", N)
					}
					if (h.cookie.indexOf("tracertraffic=") != -1)
						if (!h.referrer
								|| h.referrer.indexOf(window.location.host) == -1)
							R("tracertraffic=0",
									"expires=Thu, 01 Jan 1970 00:00:00 GMT");
					U();
					return function(e) {
						var g;
						g = e.src;
						if (!h.getElementById("tyntSS"))
							if (g) {
								if (W(g)) {
									g = g;
									c( {
										g : I(g),
										trace_type : 3,
										w : e.width,
										h : e.height
									}, g)
								}
							} else {
								g = typeof window.getSelection != "undefined" ? window
										.getSelection().toString()
										: h.selection.createRange().text;
								if (!(!A(g).length || e.nodeName == "TEXTAREA" || e.nodeName == "INPUT")) {
									e = V(g);
									var f = {
										trace_type : 1
									};
									if (e)
										b = I(g);
									f.g = b;
									var d = Tynt.m ? Tynt.m(f, g) : true;
									e && d && c(f, g)
								}
							}
					}
				}
			}
			var C = r()
		};
		Tynt.TCL = function() {
			document.body ? Y() : window.setTimeout(Tynt.TCL, 300)
		}
	})();
	Tynt.TCL()
};
