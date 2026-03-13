import prisma from './src/lib/prisma'; prisma.scientificQuery.findMany().then(console.log).catch(console.error);
