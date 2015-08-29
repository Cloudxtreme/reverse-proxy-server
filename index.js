var proxy = require('redbird')({port: 80});

// Subdomains, paths, everything just works as expected
// trantor
proxy.register("4005.kebler.net", "http://192.168.0.69:8090");
//vmdebian
proxy.register("4005.vmdebian.kebler.net", "http://192.168.0.79:8080");
// vmndoe
proxy.register("4005.vmnode.kebler.net", "http://192.168.0.67:8080");
