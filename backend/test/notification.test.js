const app = require('../app');
const request = require('supertest');

describe('Notification Controller Tests', () => {
  // Test createNotification
  test('create a notification', (done) => {
    const newNotification = {
      notification_title: 'Test Title',
      notification_description: 'Test Description',
      username: 'testUser',
      notification_status: 'Test Status',
    };

    request(app)
      .post('/notifications/create')
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
      .get('/notifications')
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
      .get(`/notifications/${notificationId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Successfully found specific notification');
        done();
      })
      .catch(done);
  });

  // Test updateNotification
  test('update a notification', (done) => {
    const updatedNotification = {
      notification_title: 'Updated Title',
      notification_description: 'Updated Description',
      username: 'testUser',
      notification_status: 'Updated Status',
    };
    const notificationId = 1;
    request(app)
      .put(`/notifications/${notificationId}/update`)
      .send(updatedNotification)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Update notification Successfully');
        done();
      })
      .catch(done);
  });

  // Test deleteNotification
  test('delete a specific notification by ID', (done) => {
    const notificationId = 1;
    request(app)
      .delete(`/notifications/${notificationId}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe('Delete Successfull');
        done();
      })
      .catch(done);
  });


});
