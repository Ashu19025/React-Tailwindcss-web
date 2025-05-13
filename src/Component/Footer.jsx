import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500 mt-auto">
      © {new Date().getFullYear()} Repeat Inc. All rights reserved.
    </footer>
  );
}