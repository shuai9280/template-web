/*
 * @Date: 2022-10-28 14:16:23
 * @LastEditors: SiJia
 * @LastEditTime: 2022-10-29 11:23:34
 * @FilePath: \vue-ts\src\api\modules\common.ts
 */
import request from '@/request'

export const getName = () => request.get('/get')
// export const changeName = (params: any) => request.post('/changeName', params)

// export default { getName, changeName }
// export default {
//    getName() {
//       return request({
//           url: '/getName',
//           method: 'get'
//       })
//   }
// }