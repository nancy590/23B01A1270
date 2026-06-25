import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(page = 1, limit = 10, filter = "All") {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadNotifications() {
      try {
        setLoading(true);

        const data = await fetchNotifications(page, limit, filter);

        setNotifications(data.notifications || []);

        setTotalPages(data.totalPages || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadNotifications();
  }, [page, limit, filter]);

  return {
    notifications,
    loading,
    error,
    totalPages,
  };
}