import fetch from ".."
/*
 * @Author: your name
 * @Date: 2022-02-21 11:19:12
 * @LastEditTime: 2022-02-21 16:03:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ws-appvue3\src\api\authApi\index.ts
 */
const postUpload: any = async (data: any) => {
  return await fetch('/uploadApi/upload', { data })
}

export {
  postUpload,
}