const messages = [];

// Utility for random content and user selection
const getRandomContent = () => {
    const samples = [
        "Hey there!", "How are you?", "What's up?", "Long time no see.",
        "Let's catch up!", "Can you help me?", "Thanks!", "Sure!", "No worries!",
        "I'll call you later.", "Nice to meet you!", "Good morning!", "Good night!",
        "Yes.", "No.", "Maybe.", "Absolutely!", "Why not?", "See you soon!", "Take care!"
    ];
    return samples[Math.floor(Math.random() * samples.length)];
};

const getRandomUserId = () => Math.floor(Math.random() * 20) + 1;

// Generate messages
for (let i = 0; i < 50; i++) {
    const userId = getRandomUserId();
    const userMsg = {
        id: i * 2 + 1,
        userId: userId,
        content: getRandomContent(),
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 100000000)).toISOString(),
        fromMe: false
    };
    const myMsg = {
        id: i * 2 + 2,
        userId: 8794660,
        content: getRandomContent(),
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 100000000)).toISOString(),
        fromMe: true,
        to: userId,
        image:"https://scontent.fskz1-1.fna.fbcdn.net/v/t39.30808-6/268420379_2992439371016722_5446314165474704608_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jbfxqD2vLrwQ7kNvwEUx-N6&_nc_oc=AdlEZpEeDqlZGHTV0urYaq0k4T9_5LAIO9SPPvPNfxNoc65uSyVy5e2AAblgvx2VnLM&_nc_zt=23&_nc_ht=scontent.fskz1-1.fna&_nc_gid=_CyF2yEKVQGRVEkJBp8fiQ&oh=00_AfF0w9ws-3_DN9MzIbRN9MzZKCY7p9KSijkRb3czqaI-GQ&oe=681C5F63"
    };
    messages.push(userMsg, myMsg);
}

export default messages;