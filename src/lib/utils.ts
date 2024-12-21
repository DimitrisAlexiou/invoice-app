import { InvoiceStatus } from '@/enums';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getStatus = (status: InvoiceStatus): string => {
	switch (status) {
		case InvoiceStatus.Open:
			return 'bg-blue-500';
		case InvoiceStatus.Paid:
			return 'bg-green-500';
		case InvoiceStatus.Void:
			return 'bg-zinc-500';
		case InvoiceStatus.Uncollectible:
			return 'bg-red-500';
		default:
			return '';
	}
};
