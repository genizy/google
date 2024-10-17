onmessage = function(o) {
	importScripts("https://cdn.jsdelivr.net/gh/genizy/google/classes_server.js");
	eaglercraftServerOpts = o.data;
	main();
};
