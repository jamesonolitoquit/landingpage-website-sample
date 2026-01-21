import { PageLayout } from "@/components/PageLayout";
import { Metadata } from "next";
import ProfileContent from "./ProfileContent";

export const metadata: Metadata = {
  title: "Profile - Landing Page Sample",
  description: "Manage your account profile and preferences.",
};

export default function Profile() {
  return (
    <PageLayout>
      <ProfileContent />
    </PageLayout>
  );
}