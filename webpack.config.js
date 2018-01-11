const path =require('path'); //import NOde.js path module for path related operations
//create our config object

const config = {
    entry: path.join(__dirname, '/client/index.js'), //Absolute path to our entry file
    output: { // our output configuration
        path: path.join(__dirname, './public'), //output path (directory/folder)
        filename: 'bundle.js' //output bundled file name
         },

    module: { //define our loaders here
        rules: [ // array of rules to handle different file types
            {
                test: /\.(js|jsx)$/, //check for .js and .jsx files (use Regex)
                loader: 'babel-loader' //use these laoders for .js and .jsx files found

            }
        ]

    }
};

//export our config object
//using es5 for webpack
module.exports = config;
