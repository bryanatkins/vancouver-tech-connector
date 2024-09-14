import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NetworkTab = () => {
  const contacts = [
    { id: 1, name: 'John Doe', event: 'AI Meetup', avatar: 'https://github.com/shadcn.png' },
    { id: 2, name: 'Jane Smith', event: 'UX Design Workshop', avatar: 'https://github.com/shadcn.png' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Your Network</h2>
      {contacts.map((contact) => (
        <div key={contact.id} className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={contact.avatar} alt={contact.name} />
            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{contact.name}</p>
            <p className="text-sm text-gray-500">Attending: {contact.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkTab;