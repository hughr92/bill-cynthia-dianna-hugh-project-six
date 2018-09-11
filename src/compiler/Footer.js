import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'

class Footer extends Component {
    render() {

        return <div>
            <footer className="footer">Footer</footer>
            <div className="wrapper">
              <div className="footerContent">
                <div class="footerContent__cell">
                  <h3 class="footerContent__cell__heading">About Us</h3>
                  <p class="footerContent__cell__body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                  </p>
                </div>
                <div class="footerSocial">
                  <div class="footerSocial__cell">
                    <ul>
                      <li class="facebook">
                        <a class="socialLinks" href="#">
                          <i class="fab fa-facebook-square" />
                        </a>
                      </li>
                      <li class="instagram">
                        <a class="socialLinks" href="#">
                          <i class="fab fa-instagram" />
                        </a>
                      </li>
                      <li class="pinterest">
                        <a class="socialLinks" href="#">
                          <i class="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <nav class="footerNav">
                    <h2 class="footerNav__heading">Splash Pad</h2>
                    <ul class="navList nav__wrapped">
                      <li class="footerNavList__item">
                        <a href="#" class="navList__link">
                          Home
                        </a>
                      </li>
                      
                      <li class="footerNavList__item">
                        <a href="#" class="navList__link">
                          Enquiries & Comments
                        </a>
                      </li>
                      <li class="footerNavList__item">
                        <a href="#" class="navList__link">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <p class="footer__copyright">
                    © 2018 HappyCampers All rights reserved (Created by
                    Bill, Cynthia, Dianna, Hugh)
                  </p>
                </div>
              </div>
            </div>
          </div>;

    }
}

export default Footer; 