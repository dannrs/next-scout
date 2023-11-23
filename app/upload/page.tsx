'use client'

import UploadForm from "@/components/upload-form";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return <UploadForm onClick={handleClick} />;
}
