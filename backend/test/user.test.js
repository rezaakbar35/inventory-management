const app = require('../app')
const request = require('supertest')

describe('User Test', () => {
    
    //test post method
    test('register user test', (done) => {
        const newUser = {
            first_name: "Test",
            last_name: "Test",
            username: "Tesssssssssst",
            email: "test@gmail.com",
            password: "test3456",
            user_address: "st. Test",
            user_role: "user",
        }

        request(app)
            .post('/register')
            .send(newUser)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Succesfully Register!')
                expect(response.status).toBe(201)
                done()
            })
            .catch(done)
    })

    test('login user test', (done) => {
        const loginUser = {
            username: "Tesssssssssst",
            password: "test3456",
        }

        request(app)
            .post('/login')
            .send(loginUser)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.message).toBe('Login Success')
                expect(response.status).toBe(200)
                done()
            })
            .catch(done)
    })
})