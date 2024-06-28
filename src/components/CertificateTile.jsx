import React from "react";

function CertificateTile({ icon, title, organization, date, link }) {
  return (
    <div className="p-4 border bg-frost-lighter-shade dark:bg-frost-darker-shade rounded-2xl border-neutral-900/10 dark:border-neutral-100/10">
      <div className="flex items-center p-2 gap-x-5">
        <div className="p-3 rounded-full bg-neutral-900/10 dark:bg-neutral-100/10">
          {icon}
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <p className="text-lg font-bold">{title}</p>
            <p className="text-sm">{organization}</p>
          </div>
          <div className="text-right">
            <p className="text-sm">{date}</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-neutral-500 hover:underline"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default CertificateTile;
