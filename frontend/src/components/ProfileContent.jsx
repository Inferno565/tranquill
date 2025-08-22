import React from "react";

export default function ProfileContent({ activeTab }) {
  switch (activeTab) {
    case "blogs":
      return (
        <>
          <div>This is ur blogs</div>
        </>
      );
      break;
    case "profile":
      return (
        <>
          <div>This is ur profile</div>
        </>
      );
      break;
    case "settings":
      return (
        <>
          <div>This is settings</div>
        </>
      );
      break;

    default:
      break;
  }
}
