function FindProxyForURL(url, host) {
if (shExpMatch(url,"*.google.com/*")) {
return "PROXY baidu.com";
}
if (shExpMatch(url, "*.wikipedia.com:*/*")) {
return "SOCKS5 proxy.lxx1.com:808";
}
if (isInNet(host, "10.0.0.0",  "255.0.0.0")){
return "DIRECT";
}
return "DIRECT; PROXY 192.168.1.1:808; SOCKS5 proxy.lxx1.com:808";
}
