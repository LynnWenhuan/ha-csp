
/**
 * Created on 2017/8/22.
 * @author LynnLin
 *
 */

const path = require('path');

const svgDir = path.resolve(__dirname, '.././src/assets/svg');
const fs = require('fs');

// 读取单个文件
function readfile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(svgDir, filename), 'utf8', (err, data) => {
      data = data.replace(/<\?xml.*?\?>|<!--.*?-->|<path fill='#[a-zA-Z0-9]'|<!DOCTYPE.*?>/g, '');
      data = data.replace(/<path fill="#[a-zA-Z0-9]+"|<path/g, '<path fill="#ef473a"');
      if (err) reject(err);
      resolve({
        [filename.slice(0, filename.lastIndexOf('.'))]: data,
      });
    });
  });
}

// 读取SVG文件夹下所有svg
function readSvgs() {
  return new Promise((resolve, reject) => {
    fs.readdir(svgDir, (err, files) => {
      if (err) reject(err);
      Promise.all(files.map(filename => readfile(filename)))
      .then(data => resolve(data))
      .catch(() => reject(err));
    });
  });
}

// 生成js文件
readSvgs().then((data) => {
  console.log(123456, data);
  console.log(123456);
  const svgFile = 'export default ' + JSON.stringify(Object.assign.apply(this, data));
  console.log(svgFile);
  fs.writeFile(path.resolve(__dirname, '.././src/assets/svgs.js'), svgFile, (err) => {
    if (err) throw new Error(err);
  });
}).catch((err) => {
  throw new Error(err);
});

