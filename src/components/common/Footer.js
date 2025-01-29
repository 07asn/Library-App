import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-6">
      <div className="container mx-auto">
        <p> Book Library | all rights reserved © 2025</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">سياسة الخصوصية</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400">الشروط والأحكام</a>
        </div>
        <div className="mt-2">
          <a href="#" className="mx-2 hover:text-blue-400">🔗 Facebook</a>
          <a href="#" className="mx-2 hover:text-blue-400">🔗 Twitter</a>
          <a href="#" className="mx-2 hover:text-blue-400">🔗 Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;