import'./react.css'
import'@fortawesome/react-fontawesome'

const PriceCard = ({ level, users, price, features }) => (
  <div className="price-card">
    <h2 className="price-card-level">{level}</h2>
    <h3 className="price-card-price">${price}/month</h3>
    <ul className="price-card-features" >
      {features.map((feature, index) => (
        <li key={index} className={feature.important ? "important" : ""}>
          {feature.text}
          {feature.important && <span>*</span> }
        </li>
      ))}
    </ul>
    <center>
    <button className="price-card-button"> Button</button>
    </center>
  </div>
);

const App = () => (
  <div className="app">
    <PriceCard
      level="FREE"
      users="Button"
      price="0"
      features={[
        { text: "50GB Storage"},
        { text: "Unlimited Public Projects" },
        { text: "Community Access" },
        { text: "Unlimited Private Projects" },
        { text: "Dedicated Phone Support" },
        { text: "Free Subdomain" },
        { text: "Monthly Status Reports" },
      ]}
    />
    <PriceCard
      level="PLUS"
      users="Button"
      price="9"
      features={[
        { text: "50GB Storage" },
        { text: "Unlimited Public Projects" },
        { text: "Community Access" },
        { text: "Unlimited Private Projects" },
        { text: "Dedicated Phone Support" },
        { text: "Free Subdomain" },
        { text: "Monthly Status Reports" },
      ]}
    />
    <PriceCard
      level="PRO"
      users="Button"
      price="49"
      features={[
        { text: "50GB Storage" },
        { text: "Unlimited Public Projects"},
        { text: "Community Access" },
        { text: "Unlimited Private Projects" },
        { text: "Dedicated Phone Support" },
        { text: "Free Subdomain" },
        { text: "Monthly Status Reports"},
      ]}
    />
  </div>
);

export default App;