import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 text-sm text-gray-500 z-50">
  <div className="flex flex-col md:flex-row items-center justify-between gap-2">
    <div className="text-center md:text-left">Privacy Policy</div>
    <div className="text-center md:text-left">Terms of Use</div>
    <div className="flex items-center justify-center">
      <img src="https://via.placeholder.com/150" alt="Footer logo" className="inline-block h-6 mr-2" />
      <span>@Hope UI, Made with by IQONIC Design.</span>
    </div>
  </div>
</footer>

  );
}
