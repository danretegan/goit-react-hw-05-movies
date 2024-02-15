import React, { Component } from 'react';
import styles from './ScrollButton.module.css';

class ScrollButton extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction);
  }

  scrollFunction = () => {
    const mybutton = document.getElementById('btn-back-to-top');
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  };

  backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <button
        id="btn-back-to-top"
        className={styles.ScrollButton}
        onClick={this.backToTop}
      >
        Scroll to Top
      </button>
    );
  }
}

export default ScrollButton;
