var expect = require('expect');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var CountDown = require('Countdown');

describe('CountDown',()=>{
  it('should exist',()=>{
    expect(CountDown).toExist();
  });

  describe('handleSetCountdown', () =>{
    it('should set state to started and coundown', (done) =>{
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });

    it('should not be negative', (done) =>{
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      countdown.handleSetCountdown(1);
      setTimeout(()=>{
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    });

  });
});
