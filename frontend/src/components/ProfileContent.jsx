import React from "react";
import BlogsTab from "./BlogsTab";
import EditProfileTab from "./EditProfileTab";
import SettingsTab from "./SettingsTab";

export default function ProfileContent({ activeTab }) {
  switch (activeTab) {
    case "blogs":
      return (
        <>
          <BlogsTab />
        </>
      );
      break;
    case "profile":
      return (
        <>
          <EditProfileTab />
        </>
      );
      break;
    case "settings":
      return (
        <>
          <SettingsTab />
        </>
      );
      break;

    default:
      break;
  }
}
