const app = require('../app');
const request = require('supertest');

describe('Notification Controller Tests', () => {
  // Test createNotification
  test('create a notification', (done) => {
    const newNotification = {
      notification_title: 'Test Title',
      notification_description: 'Test Description',
      username: 'beaknih',
      notification_status: 'Test Status',
    };

    request(app)
      .post('/notification/create')
      .send(newNotification)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Create notification successfully');
        done();
      });
  });

  // Test getAllNotification
  test('get all notifications', (done) => {
    request(app)
      .get('/notification')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Successfully found all notification');
        done();
      })
      .catch(done);
  });

  // Test getByIdNotification
  test('get a specific notification by ID', (done) => {
    const notificationId = 1;
    request(app)
      .get(`/notification/${notificationId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Successfully found specific notification');
        done();
      })
      .catch(done);
  });

  //test complaint
  test('get a specific notification by complaint', (done) => {
    request(app)
      .get(`/notification/status/Complaint`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Successfully found all by complaint notification');
        done();
      })
      .catch(done);
  });

  //test complaint
  test('get a specific notification by warning', (done) => {
    request(app)
      .get(`/notification/status/Warning`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Successfully found all by warning notification');
        done();
      })
      .catch(done);
  });

  //test complaint
  test('get a specific notification by Tracking', (done) => {
    request(app)
      .get(`/notification/status/Tracking`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Successfully found all by tracking notification');
        done();
      })
      .catch(done);
  });

  //test complaint
  test('get a specific notification by report', (done) => {
    request(app)
      .get(`/notification/status/Report`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Successfully found all by report notification');
        done();
      })
      .catch(done);
  });

  //test by user
  test('get a specific notification by user', (done) => {
    const username = "beaknih";
    request(app)
      .get(`/notification/user/${username}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe(`Successfully found all notification with username = ${username}`);
        done();
      })
      .catch(done);
  });

  // Test updateNotification
  test('update a notification', (done) => {
    const updatedNotification = {
      notification_title: 'Updated Title',
      notification_description: 'Updated Description',
      username: 'beaknih',
      notification_status: 'Updated Status',
    };
    const notificationId = 1;
    request(app)
      .put(`/notification/${notificationId}/update`)
      .send(updatedNotification)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Update notification Successfull');
        done();
      })
      .catch(done);
  });

  // Test deleteNotification
  test('delete a specific notification by ID', (done) => {
    const notificationId = 1;
    request(app)
      .delete(`/notification/${notificationId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Delete Successfull');
        done();
      })
      .catch(done);
  });


});
