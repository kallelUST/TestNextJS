"use client";

import { Disclosure } from "@headlessui/react";
import { FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useSearchBarContext } from "./context";
const navigation = [
  { name: "Home", icon: HomeIcon, current: false, href: "#" },
  {
    name: "Team",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Laurent Scola", href: "#" },
      { name: "Deryl Kevin", href: "#" },
      { name: "Huey Asanatham", href: "#" },
      { name: "Kallel Amine", href: "#" },
    ],
  },
  {
    name: "Bookmarks",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Toggle", href: "#" },
      { name: "Next JS", href: "#" },
      { name: "Tailwind", href: "#" },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let { open, setOpen } = useSearchBarContext();
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r bg-gray-800 pt-5 pb-4">
      <div className="flex flex-shrink-0 justify-between items-center px-4">
        <img
          className="h-8 w-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/CLSA_logo.svg/1200px-CLSA_logo.svg.png"
          alt="Your Company"
        />
        <p className=" text-xl text-white">Tech Portal</p>
      </div>
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-gray-800 px-2" aria-label="Sidebar">
          <div className="sticky top-0 -ml-0.5 pointer-events-none">
            <div className="h-10 bg-gray-800 dark:bg-slate-900"></div>
            <div className="bg-gray-800  dark:bg-slate-900 relative pointer-events-auto">
              <button
                type="button"
                className="hidden w-full lg:flex items-center text-sm leading-6 text-white rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-gray-300 bg-gray-700 highlight-white/5 hover:bg-gray-600"
                onClick={() => setOpen(true)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className="mr-3 flex-none"
                >
                  <path
                    d="m19 19-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                Quick search...
                <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                  Ctrl K
                </span>
              </button>
            </div>
            <div className="h-8 bg-gradient-to-b from-gray-800 dark:from-slate-900"></div>
          </div>
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  href="#"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current
                        ? "text-gray-300"
                        : "text-gray-400 group-hover:text-gray-300",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      )}
                    >
                      <item.icon
                        className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open ? "text-gray-400 rotate-90" : "text-gray-300",
                          "ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400"
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
