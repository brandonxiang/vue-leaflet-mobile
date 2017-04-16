 /**
 * 只支持传入一个参数 payload 多个参数可采用数组/对象解构来处理
 * @param {String} type mutations中对应的函数
 * @returns {function({commit: *}, ...[*]): *}
 */
export const makeAction = function (type) {
  return ({ commit }, ...args) => commit(type, ...args);
};
