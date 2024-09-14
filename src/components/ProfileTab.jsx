import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileTab = () => {
  const user = {
    name: 'Sarah Connor',
    jobTitle: 'Software Developer',
    avatar: 'https://github.com/shadcn.png',
    interests: ['AI', 'Cloud Computing', 'Cybersecurity'],
    goals: ['Networking', 'Learning', 'Collaboration'],
  };

  const handleSignOut = () => {
    // Implement sign out logic here
    console.log('User signed out');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.jobTitle}</p>
        </div>
      </div>
      <div>
        <h3 className="font-bold">Interests</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {user.interests.map((interest, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{interest}</span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold">Goals</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {user.goals.map((goal, index) => (
            <span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">{goal}</span>
          ))}
        </div>
      </div>
      <Button className="w-full" onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
};

export default ProfileTab;
