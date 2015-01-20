var child_process = Npm.require("child_process");

main = function() {
  console.log("I'm a meteor command line program!");

  var ls = child_process.spawn("ls");

  ls.stdout.setEncoding("utf8");
  ls.stdout.on("data", function(data){
    process.stdout.write(data);
  });
  ls.on('exit', function(){
    console.log("ls on exit");
    process.exit(0);
  });
};
