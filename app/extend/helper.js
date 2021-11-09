'use strict';
const day = require('dayjs');

module.exports = {

  timeStamp(data) {
    return new Date(data).getTime();
  },
  unPick(source, arr) {

    if (Array.isArray(arr)) {
      const obj = {};
      for (const i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i];
        }
      }
      return obj;
    }
  },
  time() {
    return day().format('YYYY-MM-DD HH:mm:ss');
  },

};
