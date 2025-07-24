"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Report } from "@/types/report";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function ReportsPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllReports() {
      try {
        const res = await fetch("/api/reports", {
          method: "GET",
        });
        const result = await res.json();

        if (!res.ok) {
          console.error(result.error);
        } else {
          setReports(result.reports);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllReports();
  }, []);



  if (loading)
    return (
      <div className="py-6 px-12">
        <div>
          <h1 className="text-2xl font-bold mb-4">Latest Reports</h1>
        </div>
        <Skeleton className="h-40 w-1/3" />
      </div>
    );

  return (
    <div className="py-2 px-5 lg:py-6 lg:px-12">
      <div>
        <h1 className="text-2xl font-bold mb-4">Latest Reports</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <Link key={report.id} href={`/reports/${report.slug}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <Image width={300} height={200} src={report.coverimg || ""} alt="" />
              </CardHeader>
              <CardContent className="pt-2">
                <CardTitle className="mb-2">{report.name}</CardTitle>
                <CardDescription className="mb-2">
                  {new Date(report.created_at).toLocaleDateString()}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
