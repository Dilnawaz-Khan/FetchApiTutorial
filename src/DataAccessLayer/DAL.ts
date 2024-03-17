export const DAL = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  GET: async function (endpoint: string) {
    try {
      const response = await fetch(this.baseURL + endpoint);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('Error(GET): ', error);
    }
  },
  POST: async function (endpoint: string, requestBody: any) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error('Network response was not okay');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('Error(POST): ', error);
    }
  },
  PUT: async function (endpoint: string, requestBody: any) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error('Network response was not okay');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('Error(PUT): ', error);
    }
  },
  PATCH: async function (endpoint: string, requestBody: any) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error('Network response was not okay');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('Error(POST): ', error);
    }
  },
  DELETE: async function (endpoint: string) {
    try {
      const response = await fetch(this.baseURL + endpoint, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not okay');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('Error(POST): ', error);
    }
  },
};
