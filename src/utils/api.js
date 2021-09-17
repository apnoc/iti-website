import {
  getCountryDetails,
  getEmployeeDetail,
  gethome,
  getList,
  getProfile,
} from "./serviceCall";

export async function getCountryData() {
  try {
    const { error, data } = await getCountryDetails();
    if (data.status == 1) {
      return { error: false, response: data };
    } else {
      return { error: true, message: data.message };
    }
  } catch (error) {
    return { error: true, message: "network error" };
  }
}

export async function getEmployeeDetails(req) {
  try {
    const { error, data } = await getEmployeeDetail(req);
    if (data.status == 1) {
      return { error: false, response: data };
    } else {
      return { error: true, message: data.message };
    }
  } catch (error) {
    return { error: true, message: "network error" };
  }
}

export async function getTradesDetails(req) {
  try {
    const { error, data } = await gethome(req);
    if (data) {
      return { error: false, response: data };
    } else {
      return { error: true, message: data.message };
    }
  } catch (error) {
    return { error: true, message: "network error" };
  }
}

export async function getTradesLists(req) {
  try {
    const { error, data } = await getList(req);
    if (data) {
      return { error: false, response: data };
    } else {
      return { error: true, message: data.message };
    }
  } catch (error) {
    return { error: true, message: "network error" };
  }
}

export async function getTradesProfiles(req) {
  try {
    const { error, data } = await getProfile(req);
    if (data) {
      return { error: false, response: data };
    } else {
      return { error: true, message: data.message };
    }
  } catch (error) {
    return { error: true, message: "network error" };
  }
}
