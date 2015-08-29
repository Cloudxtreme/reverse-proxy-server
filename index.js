var proxy = require('redbird')({port: 80});

// Subdomains, paths, everything just works as expected
proxy.register("4005.trantor.kebler.net", "http://192.168.0.69:8090");
proxy.register("4005.kebler.net", "http://192.168.0.79:8080");