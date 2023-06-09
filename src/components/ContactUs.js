import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me via the channels below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email : 
                  {resumeData.emailAdd}
                </h4>
                <h4>Contact Number : 
                  {resumeData.phoneAdd}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}