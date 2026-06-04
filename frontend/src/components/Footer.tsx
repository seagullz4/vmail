import { Link } from "react-router-dom";

/**
 * 网站的页脚组件
 */
export function Footer() {
  return (
    <div className="text-white w-full mt-auto flex flex-col items-center justify-between px-5 pt-16 mb-10 md:px-10 mx-auto sm:flex-row">
      <Link to="/" className="text-xl font-black leading-none select-none logo">
        VMAIL.DEV
      </Link>{" "}
      <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
        © 2024-2026 Products of{" "}
        <a
          className="font-semibold underline hover:text-gray-600"
          href="https://www.oiov.dev"
          target="_blank"
          rel="noopener noreferrer">
          oiov
        </a>
        .
      </p>
    </div>
  );
}
