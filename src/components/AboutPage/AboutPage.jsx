
import React from 'react';
import styles from './AboutPage.module.css';

export default function AboutPage({ content, pageName }) {
  return (
    <div className="py-7">
      <div className={`container ${styles.aboutPage}`}>
        <span className="font-bold text-3xl mb-10">About {pageName}</span>
        <div className={`blog-content-main ${styles.aboutPageContent}`}>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className={styles.ckeditorContent}
          />
        </div>
      </div>
    </div>
  );
}
