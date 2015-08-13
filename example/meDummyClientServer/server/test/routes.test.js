process.env.NODE_ENV = 'test';

var assert = require('assert');
var http = require('http');
var app = require('../index');
var request = require('supertest')('localhost:1337');
var sinon = require('sinon');

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
            it('Should add a user', (done) => {

                var user = {
                    name: 'a',
                    email: 'e'
                };

                request
                    .post('/users')
                    .send('name=a')
                    .send('email=e')
                    .set('Content-Type', 'application/json')

                    .expect(200)
                    .expect('Content-Type', /json/)
                    .expect(shouldReturnValues)
                    .end(done);

                    function shouldReturnValues(res) {
                        console.log(res);
                        assert(res.body.name === 'a');
                        assert(res.body.email === 'e');
                    }
            });
        });

        describe('PUT', () => {
            it('Should change a user', (done) => {
                request
                    .put('/users')
                    .field('name', 'my-awesome-changed-name')
                    .field('email', 'my-awesome-changed-email')
                    .expect(200)
                    /*.expect('Content-Type', /json/)
                    .expect((res) => {
                        assert(res.body.name === 'my-awesome-changed-name');
                        assert(res.body.name === 'my-awesome-changed-email');
                    });*/

                    done();
            });
        });

    });

});