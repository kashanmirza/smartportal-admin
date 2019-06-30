// import _ from 'lodash';

class Helper {
  // eslint-disable-next-line class-methods-use-this
  getUniqueList(list) {
    return list.filter(item => item !== '' && item !== null && item !== undefined);
  }
}

export default new Helper();
