const sequelize = require('./database');

// Require models before calling the seed function
const User = require('./models/userModel');
const Post = require('./models/postModel');
const Comment = require('./models/commentModel');
const establish_associations = require('./models/associations');

async function seedDatabase() {
    establish_associations();

    // Sync the models with the database
    await sequelize.sync({ force: true });

    // Create dummy users
    const user1 = await User.create({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
    });

    const user2 = await User.create({
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password456',
    });

    const user3 = await User.create({
        name: 'Sam Jones',
        email: 'sam@example.com',
        password: 'password123',
    });

    // Create dummy posts
    const post1 = await Post.create({
        title: 'First Post',
        content: 'This is the content of the first post. ',
        date: new Date(),
        UserId: user1.id, // Associate the post with the user
    });

    const post2 = await Post.create({
        title: 'Second Post',
        content: 'This is the content of the second post.',
        date: new Date(),
        UserId: user2.id, // Associate the post with the user
    });

    // Create dummy comments
    const comment1 = await Comment.create({
        content: 'Great post!',
        UserId: user2.id, // Associate the comment with the user
        PostId: post1.id, // Associate the comment with the post
    });

    const comment2 = await Comment.create({
        content: 'Interesting thoughts.',
        UserId: user3.id, // Associate the comment with the user
        PostId: post1.id, // Associate the comment with the post
    });

    const comment3 = await Comment.create({
        content: 'This is great.',
        UserId: user1.id, // Associate the comment with the user
        PostId: post2.id, // Associate the comment with the post
    });


    console.log('Dummy data seeded successfully.');
}

module.exports = seedDatabase;