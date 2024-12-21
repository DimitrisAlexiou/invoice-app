import { eq } from 'drizzle-orm';
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { Badge } from '@/components/ui/badge';
import { cn, getStatus } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { InvoiceStatus } from '@/enums';

interface InvoiceParamsProps {
    params: {
        invoiceId: string;
    };
}

export default async function Invoice({ params }: InvoiceParamsProps) {
    const invoiceId = parseInt(params.invoiceId);

    const [invoice] = await db.select()
        .from(Invoices)
        .where(eq(Invoices.id, invoiceId))
        .limit(1);

    if (!invoice)
        notFound();

    return (
        <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
            <div className="flex justify-between mb-8">
                <h1 className="text-3xl font-bold flex items-center gap-4">Invoice {invoiceId}
                    <Badge className={cn(
                        "rounded-full capitalize",
                        getStatus(invoice.status as InvoiceStatus),
                    )}>{invoice.status}</Badge>
                </h1>
                <p>

                </p>
            </div>

            <p className='text-3xl mb-3'>
                ${(invoice.value / 100).toFixed(2)}
            </p>

            <p className='text-lg mb-8'>
                {invoice.description}
            </p>

            <h2 className="text-lg font-bold mb-4">Billing Details</h2>

            <ul className='grid gap-2'>
                <li className='flex gap-4'>
                    <strong className='block w-28 flex-shrink-0 font-medium text-sm'>Invoice ID</strong>
                    <span>{invoiceId}</span>
                </li>
                <li className='flex gap-4'>
                    <strong className='block w-28 flex-shrink-0 font-medium text-sm'>Invoice Date</strong>
                    <span> {new Date(invoice.createTs).toLocaleDateString()}</span>
                </li>
                <li className='flex gap-4'>
                    <strong className='block w-28 flex-shrink-0 font-medium text-sm'>Billing Name</strong>
                    <span></span>
                </li>
                <li className='flex gap-4'>
                    <strong className='block w-28 flex-shrink-0 font-medium text-sm'>Billing Email</strong>
                    <span></span>
                </li>
            </ul>
        </main>
    );
}
