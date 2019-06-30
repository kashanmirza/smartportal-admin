import _ from 'lodash';
import su from 'superagent';


class InternalApi {
  formatUrl = (path) => {
    if (_.isString(path)) {
      return `http://localhost:3001${path}`;
    }
    return `/${path.server}${path.path}`;
  }

  get(urlPath) {
    return new Promise((resolve, reject) => {
      su.get(this.formatUrl(urlPath))
        .then((res) => {
          console.log(res);
          resolve(res.body);
        })
        .catch((err) => {
          if (
            err &&
            err.response &&
            (err.response.status === 403 || err.response.status === 401)
          ) {
          //  window.location.href = this.oAuthUrl;
            return;
          }

          reject(err.response.body);
        });
    });
  }

  post(urlPath, jsonData = {}) {
    return new Promise((resolve, reject) => {
      su.post(this.formatUrl(urlPath))
        .send(jsonData)
        .then((res) => {
          resolve(res.body.payload);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            // window.location.href = this.oAuthUrl;
            return;
          }

          reject(err.response.body);
        });
    });
  }
}

export default new InternalApi();
