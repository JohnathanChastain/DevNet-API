import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create some users
    const user1 = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@example.com',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            name: 'Bob',
            email: 'bob@example.com',
        },
    });

    // Create some posts
    const post1 = await prisma.post.create({
        data: {
            title: 'Hello World',
            content: 'This is my first post!',
            authorId: user1.id,
        },
    });

    const post2 = await prisma.post.create({
        data: {
            title: 'Another Post',
            content: 'This is another post.',
            authorId: user2.id,
        },
    });

    console.log({ user1, user2, post1, post2 });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });