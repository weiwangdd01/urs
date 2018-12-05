const path = require("path");
const getEnvDefine = require("./envDefine");
const envDefine = getEnvDefine(process.env.ENV);
export default {
  extraBabelPlugins: [
    [
      "import",
      { libraryName: "antd-mobile", libraryDirectory: "es", style: "css" }
    ]
  ],
  hash : true,
  html: {
    "template": "./src/index.ejs"
  },
  disableCSSModules: true,
  define: envDefine,
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
};
