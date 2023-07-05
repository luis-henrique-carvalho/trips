"use client";
import { signIn, useSession } from "next-auth/react";
import TripSearch from "./components/TripSearch";
export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function Home() {
  const { data, status } = useSession();

  console.log(status);

  return (
    <div className=" ">
      <TripSearch />
    </div>
  );
}
