import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { InvoiceStatus } from "@/enums";
import { cn, getStatus } from "@/lib/utils";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default async function Dashboard() {
    const results = await db.select().from(Invoices);

    return (
        <main className="h-full">
            <Container>
                <div className="flex justify-between mb-6">
                    <h1 className="text-3xl font-bold">Invoices</h1>
                    <p>
                        <Button className="inline-flex gap-2" variant="ghost" asChild>
                            <Link href="/invoices/new">
                                <CirclePlus className="h-4 w-4" />
                                Create Invoice
                            </Link>
                        </Button>
                    </p>
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] p-4">Date</TableHead>
                            <TableHead className="p-4">Customer</TableHead>
                            <TableHead className="p-4">Email</TableHead>
                            <TableHead className="text-center p-4">Status</TableHead>
                            <TableHead className="text-right p-4">Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {results.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium text-left p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="font-semibold p-4 block">
                                        {new Date(invoice.createTs).toLocaleDateString()}
                                    </Link>
                                </TableCell>
                                <TableCell className="text-left p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="font-semibold p-4 block">
                                        Philip J. Fry
                                    </Link>
                                </TableCell>
                                <TableCell className="text-left p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="p-4 block">
                                        philipfry@email.com
                                    </Link>
                                </TableCell>
                                <TableCell className="text-center p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="p-4 block">
                                        <Badge className={cn(
                                            "rounded-full",
                                            getStatus(invoice.status as InvoiceStatus),
                                        )}>{invoice.status}</Badge>
                                    </Link>
                                </TableCell>
                                <TableCell className="text-right p-0">
                                    <Link href={`/invoices/${invoice.id}`} className="font-semibold p-4 block">
                                        ${(invoice.value / 100).toFixed(2)}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </main>
    );
}
