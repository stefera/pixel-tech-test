/// dummy data for dogs
const dogs = [
  {
    id: 1,
    name: "Max",
    dateOfBirth: "15-04-2019",
    breed: "Labrador Retriever",
    weight: 25,
    imageUrl: "https://example.com/max.jpg",
  },
  {
    id: 2,
    name: "Bella",
    dateOfBirth: "02-11-2020",
    breed: "Poodle",
    weight: 15,
    imageUrl: "https://example.com/bella.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    dateOfBirth: "10-09-2016",
    breed: "German Shepherd",
    weight: 30,
    imageUrl: "https://example.com/charlie.jpg",
  },
  {
    id: 4,
    name: "Lucy",
    dateOfBirth: "21-07-2017",
    breed: "Beagle",
    weight: 12,
    imageUrl: "https://example.com/lucy.jpg",
  },
  {
    id: 5,
    name: "Cooper",
    dateOfBirth: "08-03-2022",
    breed: "Golden Retriever",
    weight: 20,
    imageUrl: "https://example.com/cooper.jpg",
  },
  {
    id: 6,
    name: "Luna",
    dateOfBirth: "05-06-2021",
    breed: "Siberian Husky",
    weight: 18,
    imageUrl: "https://example.com/luna.jpg",
  },
  {
    id: 7,
    name: "Rocky",
    dateOfBirth: "17-12-2015",
    breed: "Boxer",
    weight: 28,
    imageUrl: "https://example.com/rocky.jpg",
  },
  {
    id: 8,
    name: "Daisy",
    dateOfBirth: "29-09-2018",
    breed: "Bulldog",
    weight: 22,
    imageUrl: "https://example.com/daisy.jpg",
  },
  {
    id: 9,
    name: "Maximus",
    dateOfBirth: "12-01-2017",
    breed: "Rottweiler",
    weight: 32,
    imageUrl: "https://example.com/maximus.jpg",
  },
  {
    id: 10,
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
    dogById: (_, { id }, { dataSources }) => {
      return dogs.filter((dog) => dog.id === id)[0];
    },
    dogByBreed: (_, { breed }, { dataSources }) => {
      return dogs.filter((dog) => dog.breed === breed);
    },
  },
};

module.exports = resolvers;
