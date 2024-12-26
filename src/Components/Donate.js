import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Donate.css';

const Donate = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('0000-0000-0000-0000');
  const [cvv, setCvv] = useState('xxxx');

  const handleCardFocus = () => setCardNumber('');
  const handleCardBlur = () => cardNumber === '' && setCardNumber('0000-0000-0000-0000');
  const handleCvvFocus = () => setCvv('');
  const handleCvvBlur = () => cvv === '' && setCvv('xxxx');

  return (
    <div className="main">
      <h1>DONATE</h1>
      <div className="content">
        <Tabs>
          <TabList>
            <Tab>Credit Card</Tab>
            <Tab>Net Banking</Tab>
            <Tab>PayPal</Tab>
            <Tab>Debit Card</Tab>
          </TabList>

          {/* Credit Card Payment Form */}
          <TabPanel>
            <div className="payment-info">
              <h3>Personal Information</h3>
              <form>
                <div className="tab-for">
                  <h5>EMAIL ADDRESS</h5>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <h5>FIRST NAME</h5>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
              </form>

              <h3 className="pay-title">Credit Card Info</h3>
              <form>
                <div className="tab-for">
                  <h5>NAME ON CARD</h5>
                  <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                  <h5>CARD NUMBER</h5>
                  <input
                    className="pay-logo"
                    type="text"
                    value={cardNumber}
                    onFocus={handleCardFocus}
                    onBlur={handleCardBlur}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="transaction">
                  <div className="tab-form-left user-form">
                    <h5>EXPIRATION</h5>
                    <ul>
                      <li><input type="number" className="text_box" min="1" /></li>
                      <li><input type="number" className="text_box" min="1" /></li>
                    </ul>
                  </div>
                  <div className="tab-form-right user-form-rt">
                    <h5>CVV NUMBER</h5>
                    <input
                      type="text"
                      value={cvv}
                      onFocus={handleCvvFocus}
                      onBlur={handleCvvBlur}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <input type="submit" value="SUBMIT" />
              </form>

              <div className="single-bottom">
                <ul>
                  <li>
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                      <span></span>By checking this box, I agree to the Terms & Conditions & Privacy Policy.
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </TabPanel>

          {/* Net Banking */}
          <TabPanel>
            <h3>Net Banking</h3>
            <div className="radio-btns">
              {/* Radio buttons code */}
            </div>
          </TabPanel>

          {/* PayPal */}
          <TabPanel>
            <h3>PayPal</h3>
            <h4>Already Have A PayPal Account?</h4>
            <div className="login-tab">
              <div className="user-login">
                <h2>Login</h2>
                <form>
                  <input
                    type="text"
                    placeholder="name@email.com"
                    required
                  />
                  <input
                    type="password"
                    placeholder="PASSWORD"
                    required
                  />
                  <div className="user-grids">
                    <div className="user-left">
                      <div className="single-bottom">
                        <ul>
                          <li>
                            <input type="checkbox" id="brand1" value="" />
                            <label htmlFor="brand1"><span></span>Remember me?</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="user-right">
                      <input type="submit" value="LOGIN" />
                    </div>
                    <div className="clear"></div>
                  </div>
                </form>
              </div>
            </div>
          </TabPanel>

          {/* Debit Card */}
          <TabPanel>
            <h3 className="pay-title">Debit Card Info</h3>
            <form>
              <div className="tab-for">
                <h5>NAME ON CARD</h5>
                <input type="text" />
                <h5>CARD NUMBER</h5>
                <input
                  className="pay-logo"
                  type="text"
                  placeholder="0000-0000-0000-0000"
                  required
                />
              </div>
              <div className="transaction">
                <div className="tab-form-left user-form">
                  <h5>EXPIRATION</h5>
                  <ul>
                    <li><input type="number" className="text_box" min="1" /></li>
                    <li><input type="number" className="text_box" min="1" /></li>
                  </ul>
                </div>
                <div className="tab-form-right user-form-rt">
                  <h5>CVV NUMBER</h5>
                  <input
                    type="text"
                    placeholder="xxxx"
                    required
                  />
                </div>
                <div className="clear"></div>
              </div>
              <input type="submit" value="SUBMIT" />
            </form>
            <div className="single-bottom">
              <ul>
                <li>
                  <input type="checkbox" id="brand" />
                  <label htmlFor="brand"><span></span>By checking this box, I agree to the Terms & Conditions & Privacy Policy.</label>
                </li>
              </ul>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <p className="footer">&copy; Copyright <strong><span>Old Age Home</span></strong>. All Rights Reserved</p>
    </div>
  );
};

export default Donate;
