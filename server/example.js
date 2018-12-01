// var fs = require('fs')
// var parse = require('dockerfile-parse')
//  console.log(__dirname+'/Dockerfile');
// var dockerFile = fs.readFileSync(__dirname + '/Dockerfile', 'utf8')
// var pojo = parse(dockerFile)
 
// console.log(pojo)


// var fs = require('fs')
// YAML = require('yamljs');
// var dockerFile = fs.readFileSync(__dirname + '/docker-compose.yml', 'utf8')
// //console.log("first dockerfile",dockerFile);
// // parse YAML string
// nativeObject = YAML.parse(dockerFile);
// //console.log("first native object",nativeObject);
// // Generate YAML
// dockerFile = YAML.stringify(nativeObject, 4);
// console.log("second docker file object",dockerFile);
// // Load yaml file using YAML.load
// nativeObject = YAML.load('docker-compose.yml');
// console.log("second native object",JSON.stringify(nativeObject));