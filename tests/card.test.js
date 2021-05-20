const request = require("supertest");
const config = require('../server')
const faker = require('faker');
const { fake } = require("faker");
const db = config.db

beforeEach(() => {
  
})

afterAll(() => {
  
});

describe("GET/card", () => {
  it ('Carta sem nome', async () => {
    const res = await request(config)
      .get('/cards/')
      .send()

    expect(res.statusCode).toEqual(400)
  })  
});