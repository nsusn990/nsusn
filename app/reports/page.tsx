"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Report } from "@/types/report";

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

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reports.map((report) => (
        <Link key={report.id} href={`/reports/${report.slug}`}>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="pt-6">
              <CardTitle className="mb-2">{report.name}</CardTitle>
              <CardDescription className="mb-2">
                Created at: {new Date(report.created_at).toLocaleDateString()}
              </CardDescription>
              <p className="text-sm text-muted-foreground">
                Status: {report.live ? "Live" : "Draft"}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
