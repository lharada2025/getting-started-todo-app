const GREETING = ['Hello world!',
    'This is nerdy',
    "Using quotes",
    'Not using quotes'
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING[ Math.floor(Math.random() * GREETING.length)],
    });
};
