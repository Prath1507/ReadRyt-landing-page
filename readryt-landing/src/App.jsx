import './App.css';

function App() {
  return (
    <div>
    {/* Navigation */}
<nav className="navbar">
 <div className="logo">
  <img src="/readryticon.png" alt="ReadRyt" />
  <span>ReadRyt</span>
</div>

  <div className="nav-links">
    <a href="#home" className="active">Home</a>
    <a href="#how-it-works">How it Works</a>
    <a href="#use-cases">Use Cases</a>
    <a href="#benefits">Benefits</a>
    <a href="#faq">FAQs</a>
  </div>

<a
  href="https://github.com/Prath1507/ReadRyt-landing-page/releases/download/v1.0.0/Readryt.apk"
  className="nav-button"
>
  Download for Android
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
  href="https://github.com/Prath1507/ReadRyt-landing-page/releases/download/v1.0.0/Readryt.apk"
  className="nav-button"
>
  Download for Android
</a>
      <a href="#how-it-works" className="secondary-button">
  See How It Works
</a>
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
  <h2>How ReadRyt works</h2>

<div className="steps">

  {/* Row 1 */}
  <div className="steps-row">

    <div className="step">
      <div className="step-number">1</div>
      <div>
        <h3>Download the app</h3>
        <p>Download ReadRyt on your Android phone and install the app.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">2</div>
      <div>
        <h3>Create an account</h3>
        <p>Sign up and create your ReadRyt account.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">3</div>
      <div>
        <h3>Verify your email</h3>
        <p>Verify your email address to activate your account.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">4</div>
      <div>
        <h3>Log in</h3>
        <p>Log in to your ReadRyt account.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">5</div>
      <div>
        <h3>Complete onboarding</h3>
        <p>Enter your business details and set up your ReadRyt workspace.</p>
      </div>
    </div>

  </div>

  {/* Row 2 */}
  <div className="steps-row">

    <div className="step">
      <div className="step-number">6</div>
      <div>
        <h3>Connect WhatsApp</h3>
        <p>Connect WhatsApp using Linked Devices to let ReadRyt receive payment screenshots.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">7</div>
      <div>
        <h3>Enable automatic media download</h3>
        <p>Keep automatic image downloads enabled in WhatsApp so payment screenshots can be processed.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">8</div>
      <div>
        <h3>Receive payment screenshots</h3>
        <p>Payment screenshots received on WhatsApp are processed by ReadRyt.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">9</div>
      <div>
        <h3>Check your dashboard</h3>
        <p>New payments appear in the Unverified tab for review.</p>
      </div>
    </div>

    <div className="step-arrow">→</div>

    <div className="step">
      <div className="step-number">10</div>
      <div>
        <h3>Upload the bank statement</h3>
        <p>ReadRyt automatically matches and sorts received payments into the Verified tab.</p>
      </div>
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

{/* Download Section */}


{/* Contact Section */}
<section className="talk-section" id="benefits">
  <div className="talk-content">
    <p className="hero-tag">GET IN TOUCH</p>

    <h2>Have questions about ReadRyt?</h2>

    <p>
      Contact us by email and we'll be happy to help you with ReadRyt,
      setup, or any questions you may have.
    </p>

    <a
      href="mailto:readrytplaystore@gmail.com"
      className="nav-button"
    >
      Contact Us
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