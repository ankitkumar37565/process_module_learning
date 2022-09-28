// process is the global object no need to require any module
//very few global object in nodejs and process is one of them
//property process process.versions used with -p flag
// node -p "process.versions"
//node -p "process.release"

// events in process exit,uncaughtException
process.on("exit",code=>{
setTimeout(()=>{console.log("not get print")},1000)
console.log("exited with status code: ",code)
})
process.on("uncaughtException",function(err){
console.error(err.stack)
})
console.log("execution completed")
// process.stdin process.stdout process.stderr
process.stdin.read("\n")
process.stdout.write("processing "+"\n")
process.argv.forEach((value,index,array)=>{
console.log(index+" : "+value)
})
// node -p "process.pid"    pid- os process id
// node -p "process.version"
// node -p "process.platform"
// node -p "process.title"
// node -p "process.argv"
// node -p "process.exit()"
// node -p "process.cwd()"  //current working dir
// node -p "process.chdir("/a/b/c")"  //change working dir
//process.nextTick-accept one argument and places it on the top of the next iteration of event loop
setTimeout(()=>{console.log("timeout 1s")},1000)//some do this
process.nextTick(()=>{console.log(" trip through event loop")}) // do this instead