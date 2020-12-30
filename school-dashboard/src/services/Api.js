import axios from 'axios';
import ClientSession from './ClientSession';
const API_BASE_URL = 'http://localhost:5000/api/';
export default class Api {
  static API_BASE_URL = API_BASE_URL;
  static create(pluralName, data, filter = null) {
    let url = API_BASE_URL + pluralName;
    if (filter) url += '?' + filter;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          if (filter) url += '&access_token=' + authData.id;
          else url += '?access_token=' + authData.id;
        }

        axios
          .post(url, data)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
  static createRelated(parentName, childName, id, data) {
    let url = API_BASE_URL + parentName + '/' + id + '/' + childName;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }
        axios
          .post(url, data)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
  static find(pluralName, id, filter) {
    let url = API_BASE_URL + pluralName;

    if (id) url += '/' + id;
    if (filter) url += '?' + filter;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          if (filter) url += '&access_token=' + authData.id;
          else url += '?access_token=' + authData.id;
        }
        axios
          .get(url)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
  static findRelated(parentName, childName, id, filter) {
    let url = API_BASE_URL + parentName + '/' + id + '/' + childName;

    if (filter) url += '?' + filter;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          if (filter) url += '&access_token=' + authData.id;
          else url += '?access_token=' + authData.id;
        }

        axios
          .get(url)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }

  static update(pluralName, id, data) {
    let url = API_BASE_URL + pluralName + '/' + id;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }

        axios({
          method: 'patch',
          url: url,
          data: data
        })
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }

  static updateRelated(parentName, childName, parentId, childId, data) {
    let url =
      API_BASE_URL +
      parentName +
      '/' +
      parentId +
      '/' +
      childName +
      '/' +
      childId;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }

        axios({
          method: 'put',
          url: url,
          data: data
        })
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
  static destroy(pluralName, id) {
    let url = API_BASE_URL + pluralName + '/' + id;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }
        axios({
          method: 'delete',
          url: url
        })
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }

  static destroyAll(pluralName, whereJSON) {
    let url = API_BASE_URL + pluralName;

    let formData = new FormData();
    formData.append('where', JSON.stringify(whereJSON));

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }

        axios({
          method: 'delete',
          url: url,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: 'where=' + JSON.stringify(whereJSON)
        })
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
  static upload(container, files, progressCallback) {
    let url = API_BASE_URL + 'containers/' + container + '/upload';

    let config = {
      onUploadProgress: progressCallback,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    let data = new FormData();
    for (let i in files) data.append('data', files[i]);

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }

        axios
          .post(url, data, config)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
  static deleteFile(container, file) {
    let url = API_BASE_URL + 'containers/' + container + '/files/' + file;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }

        axios({
          method: 'delete',
          url: url
        })
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
  static deleteFiles(container, files) {
    let url = API_BASE_URL + 'containers/deleteFiles';
    let options = { container, files };

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }

        axios
          .post(url, options)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
  static replace(pluralName, data) {
    let url = API_BASE_URL + pluralName;

    return new Promise(function(resolve, reject) {
      ClientSession.getAccessToken(function(isLoggedIn, authData) {
        if (isLoggedIn && authData != null) {
          url += '?access_token=' + authData.id;
        }
        axios
          .put(url, data)
          .then(response => resolve(response))
          .catch(error => reject(error));
      });
    });
  }
}
