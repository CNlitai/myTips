/*
 * @Author: your name
 * @Date: 2021-12-13 15:06:39
 * @LastEditTime: 2021-12-17 10:11:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myTips/downloadfile.js
 */
function dataUrlToBolb(base64, mimeType) {
  // window.atob() 用于解码base-64编码的字符串
  // window.btoa() 编码
  let bytes = window.atob(base64.split(",")[1]);
  let ab = new ArrayBuffer(bytes.length)
  let ia = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  return new Blob([ab], { type: mimeType })
}

function saveFile(blob, filename) {
  const a = document.createElement("a")
  a.download = filename
  a.href = URL.createObjectURL(blob)
  a.click()
  URL.revokeObjectURL(a.href)
}
