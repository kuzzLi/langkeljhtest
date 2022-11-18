const dev = require("./webpack.config.dev");
const prod = require("./webpack.config.prod");

const node_env=process.env.NODE_ENV;
// npm run dev
//  cross-env NODE_ENV=development npx webpack-dev-server --open 
// npm run build
// cross-env NODE_ENV=production webpack
if(node_env=="development"){
    module.exports=dev;
}
if(node_env=="production"){
    module.exports=prod;
}