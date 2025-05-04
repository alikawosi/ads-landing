"use client";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface TermlyPolicyProps {
  policyId: string;
}

export default function TermlyPolicy({ policyId }: TermlyPolicyProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.id = "termly-jssdk";
    script.onload = () => {
      setTimeout(() => setIsLoading(false), 1000);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
        <Loader2 className="w-10 h-10 text-primary animate-custom-spin" />
        <div className="w-full max-w-2xl animate-pulse space-y-4"></div>
      </div>
    );
  }

  return (
    <div
      {...{ name: "termly-embed" }}
      data-id={policyId}
      className="w-full min-h-screen"
    />
  );
}
