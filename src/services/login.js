import request from "@/utils/request";
import qs from "qs";
import {
  API_BASE
} from "@/constants";

export function login() {
  const options = {
    method: "post",
    body: JSON.stringify({
      limit: 1,
      port_key: "member_points_task"
    })
  };
  return request(`${API_BASE}/get_entry`, options);
}

