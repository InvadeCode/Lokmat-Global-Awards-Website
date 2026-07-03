import { useEffect, useState } from "react";
import { LokmatEvent } from "@/src/types";

export function useEvents() {
  const [events, setEvents] = useState<LokmatEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/events");
      if (!response.ok) throw new Error("Failed to fetch events");
      const data = await response.json();
      setEvents(data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (eventData: Omit<LokmatEvent, "id" | "createdAt">) => {
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
      if (!response.ok) throw new Error("Failed to add event");
      const newEvent = await response.json();
      setEvents((prev) => [newEvent, ...prev]);
      return true;
    } catch (err: any) {
      console.error(err);
      return false;
    }
  };

  return { events, loading, error, addEvent, refetch: fetchEvents };
}
