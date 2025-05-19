import React from "react";

const announcements = [
  {
    id: 1,
    title: "System Maintenance",
    date: "May 20, 2025",
    content: "Our systems will be under maintenance from 12:00 AM to 4:00 AM. Please plan accordingly.",
  },
  {
    id: 2,
    title: "New Feature Release",
    date: "May 18, 2025",
    content: "We have launched a new dashboard feature to help track your metrics more efficiently.",
  },
  {
    id: 3,
    title: "Holiday Notice",
    date: "May 25, 2025",
    content: "Our offices will be closed in observance of Memorial Day.",
  },
  
];

export default function AnnouncementPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold pb-2 mb-6 text-center ">Announcements</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio fuga, vero quas magni temporibus amet iste nisi totam laborum voluptatum nesciunt maiores enim numquam porro aperiam quis veritatis officiis.</p>
    <div className="mb-6 h-px bg-gray-300" />

    {/* Scrollable Container */}
    <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
        {announcements.map((announcement) => (
        <div
            key={announcement.id}
            className="rounded-2xl shadow-md p-6 bg-white"
        >
            <h2 className="text-xl font-semibold mb-1">{announcement.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{announcement.date}</p>
            <p className="text-base text-gray-700">{announcement.content}</p>
        </div>
        ))}
    </div>
    </div>

  );
}
