import { get, post, formDataPost, jsonPost } from "./request";

// params 接口需要的参数,isLoad  是否打开loading true 打开 false 禁止（可不传）
// post请求
// jsonPost json请求
// formDataPost需要上传文件的formdata请求 file 当前是否需要ele的进度条 需要进度条时isLoad:false
// 接口文档地址： https://www.yuque.com/dgcniy/gynxr9/cvgmg0
export default {
  work(params, isLoad) {
    //作品接口
    return post("/api/v2/work", params, isLoad);
  }
}