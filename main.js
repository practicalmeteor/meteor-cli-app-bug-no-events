var child_process = Npm.require("child_process");
var Fiber = Npm.require("fibers");
var Future = Npm.require('fibers/future');

main = function() {

  console.log("I'm a meteor command line program!");

  var future = new Future;

  var ls = child_process.spawn("ls");

  ls.stdout.setEncoding("utf8");
  ls.stdout.on("data", function(data){
    console.log(data);
    future.return(null);
  });


  //Meteor.setTimeout(function(){
  //  console.log("timeout");
  //  future.return(null);
  //}, 1000);
  //
  future.wait();
};
