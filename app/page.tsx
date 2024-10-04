import {
  Wrapper,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/shared/ui";

import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Main,
  Introduction,
  Featured,
  Latest,
  Contact,
} from "@/src/widget/landing";
import Link from "next/link";

export default function DeveloperBlogLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Main />
        <Introduction />
        <Featured />
        <Latest />
        <Contact />
      </main>
    </div>
  );
}
