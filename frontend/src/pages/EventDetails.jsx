import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function EventDetails(){
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get(`/events/${id}`);
        setEvent(data);
      } catch (err) { console.error(err); }
    })();
  }, [id]);

  if (!event) return <p style={{ padding: 24 }}>Loading...</p>;

  return (
    <div style={{ padding: 24 }}>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>📅 {new Date(event.date).toDateString()}</p>
      <p>📍 {event.location}</p>
    </div>
  );
}
