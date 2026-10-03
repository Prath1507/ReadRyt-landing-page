import './App.css';

function App() {
  return (
    <div>
    {/* Navigation */}
<nav className="navbar">
  <div className="logo">ReadRyt</div>

  <div className="nav-links">
    <a href="#home" className="active">Home</a>
    <a href="#how-it-works">How it Works</a>
    <a href="#use-cases">Use Cases</a>
    <a href="#benefits">Benefits</a>
    <a href="#faq">FAQs</a>
  </div>

 <a
  href="https://wa.me/91YOUR_NUMBER"
  className="nav-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Talk to Us
</a>
</nav>

      {/* Hero Section */}
 {/* Hero Section */}
<main className="hero" id="home">
  <div className="hero-content">
    <p className="hero-tag">PAYMENT TRACKING, SIMPLIFIED</p>

    <h1>
      Stop manually checking <br />
      <span>payment screenshots.</span>
    </h1>

    <p className="hero-description">
      ReadRyt reads payment details, verifies them, and helps keep your
      payment records updated automatically.
    </p>

    <div className="hero-buttons">
    <a
  href="https://wa.me/91YOUR_NUMBER"
  className="nav-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Talk to Us
</a>
      <button className="secondary-button">See How It Works</button>
    </div>

    <div className="hero-benefits">
      <div>
        <strong>Save Hours</strong>
        <p>of manual work</p>
      </div>

      <div>
        <strong>Reduce Errors</strong>
        <p>& missed payments</p>
      </div>

      <div>
        <strong>Accurate Records</strong>
        <p>always up-to-date</p>
      </div>
    </div>
  </div>

  <div className="hero-visual">
    <div className="payment-card">
      <p className="success-text">✓ Payment Successful</p>
      <h2>₹2,450</h2>
      <p>Paid to</p>
      <strong>ABC Travels</strong>
      <p className="small-text">UPI ID: abc@upi</p>
      <p className="small-text">Transaction ID: UPI123456789012</p>
    </div>

    <div className="verification-card">
      <h3>✓ ReadRyt Verification</h3>
      <p>✓ Payment Received</p>
      <p>✓ Verified</p>
      <p>✓ Identified</p>
      <p>✓ Tracked</p>
      <div className="record-updated">✓ Record Updated</div>
    </div>
  </div>
</main>

   {/* How It Works Section */}
<section className="how-it-works" id="how-it-works">
  <h2>How it works</h2>

  <div className="steps">
    <div className="step">
      <div className="step-number">1</div>
      <div>
        <h3>Payment received</h3>
        <p>You receive a payment screenshot or message.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">2</div>
      <div>
        <h3>Verified</h3>
        <p>ReadRyt checks the payment details automatically.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">3</div>
      <div>
        <h3>Identified</h3>
        <p>It identifies the payment and what it belongs to.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">4</div>
      <div>
        <h3>Tracked</h3>
        <p>Your payment record is updated and ready to view.</p>
      </div>
    </div>
  </div>
</section>

      {/* Use Cases */}
    {/* Use Cases Section */}
<section className="use-cases" id="use-cases">
  <div className="section-heading">
    <h2>Built for businesses that collect payments</h2>
    <p>
      ReadRyt adapts to your business and helps identify what each
      payment is for.
    </p>
  </div>

  <div className="use-case-cards">
    <div className="use-case-card">
      <div className="use-case-icon">🚌</div>
      <div>
        <h3>Bus Bookings</h3>
        <p>
          Match payments with bookings using details like bus number
          and seat number.
        </p>
      </div>
    </div>

    <div className="use-case-card">
      <div className="use-case-icon">🏢</div>
      <div>
        <h3>Society Maintenance</h3>
        <p>
          Track maintenance payments by flat number and payment month.
        </p>
      </div>
    </div>

    <div className="use-case-card">
      <div className="use-case-icon">🛍️</div>
      <div>
        <h3>Orders & Services</h3>
        <p>
          Connect payments with orders and keep your records updated.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Talk to Us Section */}
<section className="talk-section" id="benefits">
  <div className="talk-content">
    <p className="hero-tag">LET'S TALK</p>

    <h2>Still tracking payments manually?</h2>

    <p>
      We're talking to businesses to understand how they manage payment
      screenshots and confirmations. Tell us about your workflow and help
      us build ReadRyt the right way.
    </p>

   <a
  href="https://wa.me/91YOUR_NUMBER"
  className="nav-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Talk to Us
</a>
  </div>
</section>

      {/* Footer */}
    <footer className="footer">
  <div className="footer-content">
    <div>
      <div className="footer-logo">ReadRyt</div>
      <p>Read. Verify. Track.</p>
    </div>

    <p className="copyright">© 2026 ReadRyt. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App;