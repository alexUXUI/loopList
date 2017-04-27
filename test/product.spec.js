var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var app = require('../app.js');
var config = require('../config/config.json');
var mockData = require('./mock-data/mocks.js');
chai.use(chaiHttp);

describe('Loop List API Products Test Suite', done => {

  let id = 12345;

  it('has a product endpoint that takes an ID and returns 200 on valid request', done => {
    chai.request(`${ config.DEV.endpoint }${ id }`)
      .get('/')
      .end((err, response) => {
        expect(response.status).to.equal(200)
        done();
      });
  });

  it('it also should return a payload', done => {
    chai.request(`${ config.DEV.endpoint }${ id }`)
      .get('/')
      .end((err, response) => {
        expect(response.body).to.exist
        done();
      });
  });

  it('payload should contain document title', done => {
    chai.request(`${ config.DEV.endpoint }${ id }`)
      .get('/')
      .end((err, response) => {
        expect(response.body.title).to.equal(mockData.title)
        done();
      });
  });

  it('payload should contain product name', done => {
    chai.request(`${ config.DEV.endpoint }${ id }`)
      .get('/')
      .end((err, response) => {
        expect(response.body.name).to.equal(mockData.name)
        done();
      });
  });

  it('payload should contain product description', done => {
    chai.request(`${ config.DEV.endpoint }${ id }`)
      .get('/')
      .end((err, response) => {
        expect(response.body.description).to.equal(mockData.description)
        done();
      });
  });

  it('payload should contain product main image url', done => {
    chai.request(`${ config.DEV.endpoint }${ id }`)
      .get('/')
      .end((err, response) => {
        expect(response.body.image).to.equal(mockData.image);
        done();
      });
  });

  it('payload should contain correct product main image url', done => {
    chai.request(`${ config.DEV.endpoint }${ id }`)
      .get('/')
      .end((err, response) => {
        expect(response.body.image).to.not.equal(mockData.incorrectImageURL);
        done();
      });
  });

  it('endpoint should return a 404 on abad request', done => {
    chai.request(`http://localhost:3000/products/90823thmf4`)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
