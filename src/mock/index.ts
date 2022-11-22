/*
 * @Date: 2022-10-28 17:02:23
 * @LastEditors: SiJia
 * @LastEditTime: 2022-10-29 09:54:00
 * @FilePath: \vue-ts\src\mock\index.ts
 */
// test.ts

import type { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }: any) => {
      return {
        code: 0,
        "data|1-10": [
          {
            name: "@cname()",
            "age|1-100": 1,
            "status|1": [0, 1],
          },
        ],
      };
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
