import { currentUser } from "@/modules/authentication/actions";
import Header from "../../modules/layout/components/header";
import React from "react";
import { UserProps } from "@/modules/layout/types";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const user: UserProps | null = await currentUser();
  return (
    <main className="w-screen h-screen ">
      <Header user={user} />
      {children}
    </main>
  );
};

export default RootLayout;
