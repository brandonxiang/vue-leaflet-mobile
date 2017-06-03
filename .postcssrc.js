// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem":{
      root_value: 20, // 基准值 html{ font-zise: 20px; }
      prop_white_list: [], // 对所有 px 值生效
      minPixelValue: 2 // 忽略 1px 值
    }
  }
}
