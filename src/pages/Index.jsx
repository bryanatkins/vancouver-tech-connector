import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomeIcon, CalendarIcon, UsersIcon, UserIcon } from "lucide-react";
import NetworkTab from '../components/NetworkTab';
import EventsTab from '../components/EventsTab';
import StandoutTab from '../components/StandoutTab';
import ProfileTab from '../components/ProfileTab';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>VanTechFollow</CardTitle>
          <CardDescription>Connect, Discover, and Grow in Vancouver's Tech Scene</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="network" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="network"><HomeIcon className="h-4 w-4" /></TabsTrigger>
              <TabsTrigger value="events"><CalendarIcon className="h-4 w-4" /></TabsTrigger>
              <TabsTrigger value="standout"><UsersIcon className="h-4 w-4" /></TabsTrigger>
              <TabsTrigger value="profile"><UserIcon className="h-4 w-4" /></TabsTrigger>
            </TabsList>
            <TabsContent value="network">
              <NetworkTab />
            </TabsContent>
            <TabsContent value="events">
              <EventsTab />
            </TabsContent>
            <TabsContent value="standout">
              <StandoutTab />
            </TabsContent>
            <TabsContent value="profile">
              <ProfileTab />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign Out</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
