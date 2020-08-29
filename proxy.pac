function FindProxyForURL(url, host) {
  if (host == 'music.163.com' || host == 'ip.ws.126.net') {
    return 'PROXY 207.148.27.51:80';
  } else if (host == 'music.httpdns.c.163.com') {
    return 'PROXY 127.0.0.1:9999';
  } else if (host == 'upos-hz-mirrorakam.akamaized.net') {
    return 'PROXY 23.205.116.72:443';
  } else if (host == 'shumeipai.com') {
    return 'PROXY 192.168.0.66';
  }
  return 'DIRECT';
}
