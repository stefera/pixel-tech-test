const dogs = [
  {
    name: "Max",
    dateOfBirth: "15-04-2019",
    breed: "Labrador Retriever",
    weight: 25,
    imageUrl: "https://example.com/max.jpg",
  },
  {
    name: "Bella",
    dateOfBirth: "02-11-2020",
    breed: "Poodle",
    weight: 15,
    imageUrl: "https://example.com/bella.jpg",
  },
  {
    name: "Charlie",
    dateOfBirth: "10-09-2016",
    breed: "German Shepherd",
    weight: 30,
    imageUrl: "https://example.com/charlie.jpg",
  },
  {
    name: "Lucy",
    dateOfBirth: "21-07-2017",
    breed: "Beagle",
    weight: 12,
    imageUrl: "https://example.com/lucy.jpg",
  },
  {
    name: "Cooper",
    dateOfBirth: "08-03-2022",
    breed: "Golden Retriever",
    weight: 20,
    imageUrl: "https://example.com/cooper.jpg",
  },
  {
    name: "Luna",
    dateOfBirth: "05-06-2021",
    breed: "Siberian Husky",
    weight: 18,
    imageUrl: "https://example.com/luna.jpg",
  },
  {
    name: "Rocky",
    dateOfBirth: "17-12-2015",
    breed: "Boxer",
    weight: 28,
    imageUrl: "https://example.com/rocky.jpg",
  },
  {
    name: "Daisy",
    dateOfBirth: "29-09-2018",
    breed: "Bulldog",
    weight: 22,
    imageUrl: "https://example.com/daisy.jpg",
  },
  {
    name: "Maximus",
    dateOfBirth: "12-01-2017",
    breed: "Rottweiler",
    weight: 32,
    imageUrl: "https://example.com/maximus.jpg",
  },
  {
    name: "Sadie",
    dateOfBirth: "06-08-2020",
    breed: "Shih Tzu",
    weight: 10,
    imageUrl: "https://example.com/sadie.jpg",
  },
];

const resolvers = {
  //for now (pre MongoDB connect) populate using dummy data
  Query: {
    // get all dogs.
    dogs: (_, __, { dataSources }) => {
      return dogs;
    },
    dogbyId: (_, { id }, { dataSources }) => {
      return dogs.filter((dog) => dog.id === id)[0];
    },
    dogbyBreed: (_, { breed }, { dataSources }) => {
      return dogs.filter((dog) => dog.breed === breed);
    },
  },
};

module.exports = resolvers;
