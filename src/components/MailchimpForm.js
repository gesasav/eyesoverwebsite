// MailchimpForm.js
import React from "react";

const MailchimpForm = () => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://eyesoveraesthetics.us20.list-manage.com/subscribe/post?u=ef26ed3a7370defca102a1fca&amp;id=8a57d06d74&amp;f_id=009708e3f0"
        method="post"
        target="_blank"
        noValidate
        className="validate"
      >
        <h2>Sign up to our waitlist</h2>
        <div className="mc-field-group">
          <label>Email Address *</label>
          <input type="email" name="EMAIL" required />
        </div>
        <div className="mc-field-group">
          <label>First Name</label>
          <input type="text" name="FNAME" />
        </div>
        <div className="mc-field-group">
          <label>Phone Number</label>
          <input type="text" name="PHONE" />
        </div>
        <div hidden>
          <input type="hidden" name="tags" value="3986857" />
        </div>
        <div>
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            className="button"
          />
        </div>
      </form>
    </div>
  );
};

export default MailchimpForm;
