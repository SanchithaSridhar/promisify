function promisify(f) {
  return function(...args) {
    return new Promise(resolve, reject) {
      function callBack(err, result) { 
        if(err) reject(err);
        else resolve(result);
      }
      args.push(callback);
      f.call(this, ...args); // Call the original function with the callback added
    });
  };
};
