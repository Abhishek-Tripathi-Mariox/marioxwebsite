import React, { useEffect } from 'react';

const TabControls = ({ children, dark }) => {
  useEffect(() => {
    // Function to set initial position of tab cursor

    const initalizeTabAnim = document.querySelectorAll('.tab-anim-wrapper');

    initalizeTabAnim.forEach((initalizeTab) => {
      // Initialize tabCursor, tabButtons, and activeTab
      const tabCursor = initalizeTab.querySelector('.tab-cursor'); // Select tab cursor element
      const tabButtons = initalizeTab.querySelectorAll('.tab-button'); // Select all tab button elements
      let activeTab = initalizeTab.querySelector('.tab-link.active'); // Select active tab button element

      if (activeTab) {
        function setInitialPosition() {
          tabCursor.style.left = activeTab.offsetLeft + 'px'; // Set left position of tabCursor to active tab's left offset
        }

        setInitialPosition();
      }

      // Set initial position of tab cursor

      // Add event listeners to tabButtons
      tabButtons.forEach((tabButton) => {
        tabButton.addEventListener('click', () => {
          activeTab?.classList.remove('active');

          tabCursor.style.left =
            tabButton.querySelector('.tab-link').offsetLeft + 'px';
          tabButton.querySelector('.tab-link').classList.add('active'); // Add 'active' class to clicked tab
          activeTab = tabButton.querySelector('.tab-link'); // Update activeTab to clicked tab
        });
        // tabButton.addEventListener('mouseenter', () => {
        //   tabCursor.style.opacity = 1;

        //   tabCursor.style.transition = 'left 0.3s, width 0.3s opacity 0.3s';
        //   tabCursor.style.width =
        //     tabButton.querySelector('.tab-link').offsetWidth + 'px';
        //   tabCursor.style.height =
        //     tabButton.querySelector('.tab-link').offsetHeight + 'px';
        //   tabCursor.style.left =
        //     tabButton.querySelector('.tab-link').offsetLeft + 'px';
        // });
        // tabButton.addEventListener('mouseleave', () => {
        //   if (activeTab) {
        //     tabCursor.style.transition = 'left 0.3s, width 0.3s';
        //     tabCursor.style.width = activeTab.offsetWidth + 'px'; // Set width of tabCursor to active tab's width
        //     tabCursor.style.left = activeTab.offsetLeft + 'px';
        //   } else {
        //     tabCursor.style.opacity = 0;
        //   }
        // });
      });
      // setTimeout(() => tabCursor?.classList.remove('transition-none'), 100);
    });
  }, []);
  return (
    <div
      className={`tab-controls flex gap-7 lg:gap-15 border-b relative tab-anim-wrapper overflow-auto pt-4 ${
        dark ? ' border-b-black/20' : ' border-b-white/20'
      }`}
    >
      <span className="absolute w-2 h-2 bg-primary top-0 tab-cursor ease-elastic duration-500 left-0"></span>
      {children}
    </div>
  );
};

export default TabControls;
