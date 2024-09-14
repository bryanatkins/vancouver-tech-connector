import React from 'react';
import { Button } from "@/components/ui/button";

const EventsTab = () => {
  const events = [
    { id: 1, title: 'AI Meetup', date: '2024-03-15', location: 'Vancouver Convention Centre' },
    { id: 2, title: 'UX Design Workshop', date: '2024-03-20', location: 'VanArts' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Upcoming Events</h2>
      {events.map((event) => (
        <div key={event.id} className="border p-4 rounded-lg">
          <h3 className="font-bold">{event.title}</h3>
          <p className="text-sm text-gray-500">{event.date} at {event.location}</p>
          <Button className="mt-2" variant="outline">View Event</Button>
        </div>
      ))}
    </div>
  );
};

export default EventsTab;