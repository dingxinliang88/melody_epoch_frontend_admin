import { ElNotification } from "element-plus";

export const success = (message: string) => {
  ElNotification({
    title: "Success",
    message,
    type: "success",
  });
};

export const error = (message: string) => {
  ElNotification({
    title: "Error",
    message,
    type: "error",
  });
};

export const GENDER_MAP = ["女", "男"];
export const USER_ROLE_TYPE = {
  MEMBER: 1,
  FAN: 2,
};

export function formatDate(time: string) {
  if (time === "" || time === void 0 || time === null) return "-";
  // 创建一个 Date 对象
  var originalDate = new Date(time);

  // 提取年、月、日
  var year = originalDate.getFullYear();
  var month = ("0" + (originalDate.getMonth() + 1)).slice(-2); // 月份从0开始，所以要加1
  var day = ("0" + originalDate.getDate()).slice(-2);

  // 构建新的日期字符串
  return year + "-" + month + "-" + day;
}

export function formatDateTime(time: string) {
  if (time === "" || time === void 0 || time === null) return "-";
  // 创建一个 Date 对象
  var originalDate = new Date(time);

  // 提取年、月、日、时、分、秒
  var year = originalDate.getFullYear();
  var month = ("0" + (originalDate.getMonth() + 1)).slice(-2); // 月份从0开始，所以要加1
  var day = ("0" + originalDate.getDate()).slice(-2);
  var hours = ("0" + originalDate.getHours()).slice(-2);
  var minutes = ("0" + originalDate.getMinutes()).slice(-2);
  var seconds = ("0" + originalDate.getSeconds()).slice(-2);

  // 构建新的日期字符串
  return (
    year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
  );
}
