import { Button } from "@/ui/design-system/button/Button";
import { Typographie } from "@/ui/design-system/typographie/Typogarphie";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="p-5 bg-primary-400 min-h-screen">
        <div className="space-x-6">
          <Link href="/designsystem">
            <Button>Design System</Button>
          </Link>
          <Link href="/home">
            <Button  variant="outline">Home</Button>
          </Link>
          <Link href="/calendar">
            <Button  variant="outline">calendar</Button>
          </Link>
          <Link href="/chart">
            <Button  variant="outline">chart</Button>
          </Link>
          <Link href="/server">
            <Button  variant="outline">server</Button>
          </Link>
          <Link href="/settings">
            <Button  variant="outline">Settings</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
