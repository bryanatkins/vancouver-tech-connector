import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const StandoutTab = () => {
  const recommendations = [
    { id: 1, name: 'Alice Johnson', reason: 'Shares your interest in Blockchain', avatar: 'https://github.com/shadcn.png' },
    { id: 2, name: 'Bob Williams', reason: 'Also attending AI Meetup', avatar: 'https://github.com/shadcn.png' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">People You Should Meet</h2>
      {recommendations.map((person) => (
        <div key={person.id} className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={person.avatar} alt={person.name} />
            <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{person.name}</p>
            <p className="text-sm text-gray-500">{person.reason}</p>
          </div>
          <Button variant="outline">Connect</Button>
        </div>
      ))}
    </div>
  );
};

export default StandoutTab;