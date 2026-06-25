const API_URL = "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications(page = 1, limit = 10, type = "All") {
  const token = localStorage.getItem("access_token");

  let url = `${API_URL}?page=${page}&limit=${limit}`;

  if (type && type !== "All") {
    url += `&notification_type=${type}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return await response.json();
}