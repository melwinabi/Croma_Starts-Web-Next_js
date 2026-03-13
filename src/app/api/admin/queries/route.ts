import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        // In a real app, you would verify the admin session here
        const queries = await prisma.scientificQuery.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json({ queries });
    } catch (error) {
        console.error('API Error (Check DATABASE_URL):', error);
        // Fallback mock data if DB is offline
        return NextResponse.json({
            queries: [
                {
                    id: 'mock-1',
                    fullName: 'Elite R&D Lead',
                    corporateEmail: 'demo@croma-starts.web',
                    solutionBrief: 'This is fallback data. Configure DATABASE_URL in .env to see real submissions.',
                    createdAt: new Date().toISOString()
                }
            ],
            offline: true
        });
    }
}
