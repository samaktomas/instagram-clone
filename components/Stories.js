import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  const createRandomUser = () => ({
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  });

  useEffect(() => {
    const USERS = [];
    Array.from({ length: 20 }).forEach(() => {
      USERS.push(createRandomUser());
    });
    setSuggestions(USERS);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border 
    rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story img={session.user.image} userName={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.userId}
          img={profile.avatar}
          userName={profile.username}
        />
      ))}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}
