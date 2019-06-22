window.Seed = (function () {
  const generateVoteCount = () => {
    return Math.floor((Math.random() * 50) + 15);
  };

  const products = [
    {
      id: 1,
      title: 'Remarkable Meal > 1',
      description: 'Quitters never win, winners never quit.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/spiderman.png',
      productImageUrl: 'images/products/rmkm1.JPG',
    },
    {
      id: 2,
      title: 'Remarkable Meal > 2',
      description: 'Time plays in my favour only if I work.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/batman.png',
      productImageUrl: 'images/products/rmkm2.JPG',
    },
    {
      id: 3,
      title: 'Remarkable Meal > 3',
      description: 'I have time all around the world.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/flashman.png',
      productImageUrl: 'images/products/rmkm3.JPG',
    },
    {
      id: 4,
      title: 'Remarkable Meal > 4',
      description: "The world's full of longly people afraid to make the first move.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/ironman.png',
      productImageUrl: 'images/products/rmkm4.JPG',
    },
    {
      id: 5,
      title: 'Remarkable Meal > 5',
      description: "I've only really liked a handful of people in my life, and you've been two of them.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/catwoman.png',
      productImageUrl: 'images/products/rmkm5.JPG',
    },
    {
      id: 6,
      title: 'Remarkable Meal > 6',
      description: "Whatever you do, do it a hundred percent, when you work, work; when you laugh, laugh; when you eat, eat like it's your last meal.",
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/captain-america.png',
      productImageUrl: 'images/products/rmkm6.JPG',
    },
    {
      id: 7,
      title: 'Remarkable Meal > 7',
      description: 'Sometimes things do not work out the way you thought they would.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/superman.png',
      productImageUrl: 'images/products/rmkm7.JPG',
    }
  ];

  return { products };
}()
);
