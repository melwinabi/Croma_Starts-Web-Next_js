import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, corporateEmail, solutionBrief } = body;

        if (!fullName || !corporateEmail || !solutionBrief) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const query = await prisma.scientificQuery.create({
            data: {
                fullName,
                corporateEmail,
                solutionBrief,
            },
        });

        return NextResponse.json({ success: true, query });
    } catch (error) {
        console.error('API Error (Check DATABASE_URL):', error);
        // Fallback for demonstration if DB is not ready
        return NextResponse.json({
            success: true,
            message: 'Inquiry received (Offline Mode). Please configure DATABASE_URL for persistence.',
            mock: true
        });
    }
}
