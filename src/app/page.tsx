"use client";
import { signIn, useSession } from "next-auth/react";
import TripSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";
import RecommendedTrips from "./components/RecommendedTrips";
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
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
