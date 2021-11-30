/*
 * @Author: zhoulf
 * @FilePath: /roll-lib/docs/vant.config.js
 * @Date: 2021-11-30 11:16:50
 * @LastEditors: zhoulf
 * @LastEditTime: 2021-11-30 11:36:11
 * @Description: 
 */
module.exports = {
    name: 'docs',
    build: {
      css: {
        preprocessor: 'less',
      },
      site: {
        publicPath: './',
      },
    },
    site: {
      title: 'js基础库',
      logo: 'http://10.12.102.194:4873/-/static/3e644d871e47e917ea1cebf337ddfffc.png',
      hideSimulator: true,
      nav: [
        {
          title: '开发指南',
          items: [
            {
              path: 'home',
              title: '介绍',
            },
            {
              path: 'quickstart',
              title: '快速上手',
            }
          ],
        },
        {
          title: '函数库',
          items: [
            {
              path: 'debounce',
              title: '节流防抖',
            },
            {
              path: 'deep-clone',
              title: '对象深度克隆',
            },
            {
              path: 'deep-merge',
              title: '对象深度合并',
            },
            {
              path: 'time-format',
              title: '时间格式化',
            },
            {
              path: 'random-array',
              title: '数组随机打乱',
            },
            {
              path: 'guid-md',
              title: '全局唯一标识符'
            },
            {
              path: 'query-param',
              title: '对象转URL参数'
            },
            {
              path:'random',
              title:'随机数值'
            },
            {
              path:'trim',
              title:'去除空格'
            },
            {
              path:'test',
              title:'规则校验'
            }
          ],
        },
      ],
    },
  };
  