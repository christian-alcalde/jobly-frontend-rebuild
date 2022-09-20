import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies. */

  static async getCompanies(name = {}) { // in the sql, search query is 'name'
    let res = await this.request(`companies`, name);
    return res.companies;
  }

  /** Get details on all jobs. */

  static async getJobs(title = {}) { // in the sql, search query is 'title'
    let res = await this.request(`jobs`, title);
    return res.jobs;
  }

  /** Get details on a specific user. */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Edit details on a specific user. */

  static async editUser(username, formData) {
    let res = await this.request(`users/${username}`, formData, 'patch');
    return res.user;
  }

  /** Logs a user in and returns a token. */

  static async getToken(formData) {
    let res = await this.request(`auth/token`, formData, 'post');
    return res.token;
  }

  /** Register a user. */

  static async register(formData) {
    let res = await this.request(`auth/register`, formData, 'post');
    return res.token;
  }

  /** Allows a user to apply for a specific job. */

  static async apply(username, id) {
    let res = await this.request(`users/${username}/jobs/${id}`, {}, 'post');
    return res;
  }

  /** Allows a user to unapply for a specific job. */

  static async unapply(username, id) {
    console.log('in unapply')
    let res = await this.request(`users/${username}/jobs/${id}`, {}, 'delete');
    console.log('unapply res', res);
    return res;
  }

}

export default JoblyApi;