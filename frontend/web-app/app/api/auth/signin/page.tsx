import EmptyFilter from "@/app/components/EmptyFilter";
import React from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { callbackUrl: string };
}) {
  return (
    <EmptyFilter
      title="Before doing that need to be logged in"
      subtitle="Click below to signIn"
      showLogin
      callbackUrl={searchParams.callbackUrl}
    />
  );
}
