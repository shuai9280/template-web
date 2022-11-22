/*
 * @Date: 2022-10-28 14:16:23
 * @LastEditors: SiJia
 * @LastEditTime: 2022-10-29 11:29:02
 * @FilePath: \vue-ts\src\api\modules\user.ts
 */
import request from '@/request'
export const getUserInfo = () =>
request.get(
    `/user/info?include=avatar,tenant,roles,permissions,associationUsers,school,modules`
  ) //获取用户信息
export const setLoginLog = () => request.post(`/auth/login/log`) //记录登录日志