import React from "react";

const Contact = () => {
  return (
    <section className="contact section">
      <header>contact</header>
      <div id="contact">
        <div className="card" id="contactCard">
          <form action="action_page.php">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" placeholder="name..." />
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="emailInput"
              name="email"
              placeholder="email address..."
            />
            <label htmlFor="message">message</label>
            <textarea
              id="message"
              name="message"
              placeholder="message..."
              style={{ height: 200 }}
              defaultValue={""}
            />
            <p className="antispam">
              Leave this empty: <input type="text" name="url" />
            </p>
            <input type="submit" defaultValue="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
