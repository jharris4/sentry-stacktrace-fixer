module.exports = {
    babel: {
      targets: [
        "> 4%",
        "ie 11",
        "safari 8"
      ],
      options: {
        decorators: false,
        classProperties: false,
        privateMethods: false,
        nullishCoalescing: false,
        objectRestSpread: true,
        optionalChaining: false,
        reactJsx: false,
        forOfAsArray: false,
        reactRemovePropTypes: false,
        transformImportsMap: false,
        rewire: false
      },
      inputPath: "src",
      cjsOutputPath: "lib",
      esOutputPath: "es"
    }
  };
