var expect = require('expect');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Timer = require('Timer');

describe('Timer',()=>{
  it('should exist', ()=>{
    expect(Timer).toExist();
  });

  it('should start count up and set timer status to started', (done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer onStatusChange={() => {}}/>);
    timer.handleStatusChange('started');


    setTimeout(()=>{
      expect(timer.state.count).toBe(1);
      expect(timer.state.timerStatus).toBe('started');
      done();
    }, 1001)
  });

  it('should pause count up and set timer status to paused', (done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer onStatusChange={() => {}}/>);
    timer.handleSetTimer(3);
    timer.handleStatusChange('paused');


    setTimeout(()=>{
      expect(timer.state.count).toBe(3);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    }, 1001)
  });

  it('should reset timer and set timer status to stopped', (done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer onStatusChange={() => {}}/>);
    timer.handleSetTimer(3);
    timer.handleStatusChange('stopped');


    setTimeout(()=>{
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    }, 1001)
  });

});
