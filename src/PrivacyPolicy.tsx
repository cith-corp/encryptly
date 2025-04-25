import "./PrivacyPolicy.css"; // Assuming you create a CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">🔒 Encryptly Privacy Policy</h1>
      <p className="privacy-policy-updated">
        <em>Last updated: Whenever we feel like it.</em>
      </p>

      <p className="privacy-policy-intro">
        At <strong>Encryptly</strong>, your privacy is our top priority—right
        after profit, market share, executive bonuses, and lunch. This Privacy
        Policy outlines how we meticulously collect, shamelessly exploit, and
        gleefully monetize your personal information. By using any Encryptly
        service, you agree to surrender your data, dignity, and possibly your
        future to us. Enjoy!
      </p>

      <h2 className="privacy-policy-section-title">📦 1. What We Collect</h2>
      <ul className="privacy-policy-list">
        <li>Your full name, nickname, and your mom's maiden name.</li>
        <li>
          Every word you've typed, whispered, or dreamt while using our
          services.
        </li>
        <li>
          Device info: model, location, remaining battery life, emotional state.
        </li>
        <li>
          Cookies, crumbs, browser history, Tinder matches, and deleted texts.
        </li>
        <li>Thoughts. (Our neural sync tool is still in beta.)</li>
      </ul>

      <h2 className="privacy-policy-section-title">
        🔄 2. How We Use Your Data
      </h2>
      <ul className="privacy-policy-list">
        <li>
          <strong>Ad Targeting:</strong> You like cats? Prepare for 47,000 cat
          food ads.
        </li>
        <li>
          <strong>Behavioral Nudging:</strong> We manipulate your decisions.
          Subtly. Often.
        </li>
        <li>
          <strong>Resale:</strong> We sell your data to advertisers, shady
          marketers, and our CEO's cousin's startup “Spambox.ai.”
        </li>
        <li>
          <strong>AI Training:</strong> Our chatbot is suspiciously good at
          impersonating you. Coincidence?
        </li>
      </ul>

      <h2 className="privacy-policy-section-title">
        💰 3. Who We Share It With
      </h2>
      <ul className="privacy-policy-list">
        <li>Our “trusted partners,” i.e., anyone who pays us.</li>
        <li>Social media sites, even those you've never joined, we will create an account for you.</li>
        <li>That one sketchy app you installed in 2016. Still going strong.</li>
      </ul>

      <h2 className="privacy-policy-section-title">📵 4. Your Choices</h2>
      <ul className="privacy-policy-list">
        <li>
          Right to <em>read this policy</em> and cry.
        </li>
        <li>
          Right to <em>request deletion</em> of your data, which we will
          acknowledge, ignore, and then sell your data even more.
        </li>
        <li>
          Right to <em>opt out</em> by submitting a form in klingon via
          carrier pigeon to our Antarctic office.
        </li>
      </ul>

      <h2 className="privacy-policy-section-title">🚫 5. Children's Privacy</h2>
      <p className="privacy-policy-text">
        We do not knowingly collect data from children under 13. We{" "}
        <em>accidentally</em> collect data from their toys, tablets, and
        toothbrushes.
      </p>

      <h2 className="privacy-policy-section-title">
        🧙 6. Changes to This Policy
      </h2>
      <p className="privacy-policy-text">
        We reserve the right to change this policy at any time without notice,
        in a language you don't understand, buried on a webpage we'll hide.
      </p>

      <h2 className="privacy-policy-section-title">🤝 Final Note</h2>
      <p className="privacy-policy-text">
        By continuing to use Encryptly, you consent to all of the above. We know
        you didn't read this. No one ever does. But that's okay. We already know
        everything.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
