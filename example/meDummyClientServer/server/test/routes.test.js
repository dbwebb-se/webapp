process.env.NODE_ENV = 'test';

var assert = require('assert');
var http = require('http');
var app = require('../index');
var request = require('supertest')('localhost:1337');
var sinon = require('sinon');
var UserModel = require('../models/user');

describe('THE API', () => {


    /*beforeEach((done) => {
        request(http.Server);
    });*/

    describe('/', () => {

    });
/*
    describe('/view', () => {
        it('Should return json', (done) => {
            request
                .get('/view')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('Should return all files in the views directory (length >= 0)', (done) => {

            request
                .get('/view')
                .expect((res) => {
                    if (!res.body.err) {
                        assert(res.body.length >= 0);
                    }

                })
                .end(done);
        });

        it('Should return error if no files exist', (done) => {
            request
                .get('/view')
                .expect(404)
                .expect((res) => {
                    if (res.body.err)
                        assert(res.body.err === 'No files found');

                });

            done();
        });
    })*/

    describe('/users', () => {

        describe('GET', () => {
            it('Should return all users', (done) => {
                request
                    .get('/users')
                    .expect(200, done);
            });
        });

        describe('POST', () => {
            it('Add user with attributes', (done) => {

                request
                    .post('/users')
                    .send('name=aName')
                    .send('email=eMail')
                    .set('Content-Type', 'application/json')
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .expect(shouldReturnValues)
                    .end(done);

                    function shouldReturnValues(res) {
                        assert(res.body.name === 'aName');
                        assert(res.body.email === 'eMail');
                    }
            });

            it('Add user WITHOUT attributes', (done) => {
                request
                    .post('/users')
                    .set('Content-Type', 'application/json')
                    .expect(400)
                    .end(done);
            });

        });

        describe('PUT', () => {
            it('Should change a user', (done) => {

                // GET A sample user.
                // request
                //     .get('/users/')

                // request
                //     .put('/users/')
                //     .send('name')
                //     .expect(200)
                    /*.expect('Content-Type', /json/)
                    .expect((res) => {
                        assert(res.body.name === 'my-awesome-changed-name');
                        assert(res.body.name === 'my-awesome-changed-email');
                    });*/

                    done();
            });
        });

    });

    describe('/users/:id', () => {
        describe('GET', () => {
            it('Should return one user', (done) => {
                // Get the first user and test with it.
                UserModel.findOne((err, user) => {
                    request
                        .get('/users/' + user._id)
                        .expect(200)
                        .expect('Content-Type', /json/)
                        .end(done);
                });
            });
        });

        describe('PUT', () => {
            it('Should update on user', (done) => {
                // Get the first user and test with it.
                UserModel.findOne((err, user) => {

                    // Test the put req
                    request
                        .put('/users/' + user._id)
                        .send('name=newName')
                        .send('email=newEmail')
                        .expect(200)
                        .expect(shouldReturnValues)
                        .end(done);

                    function shouldReturnValues(res) {
                        assert(res.body.name === 'newName');
                        assert(res.body.email === 'newEmail');
                    }
                });
            });
        });
    });

});