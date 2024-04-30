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
            <Button>Design Systeme</Button>
          </Link>
          <Link href="/home">
            <Button  variant="outline">Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
