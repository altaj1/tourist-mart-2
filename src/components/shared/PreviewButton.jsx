import Link from 'next/link';
import React from 'react';

const PreviewButton = ({id}) => {
    return (
        <Link
        href={`/product-details/${id}`}
        className=" px-2 py-2 h-10 rounded-lg badge-outline bg-[#8dbe3f] hover:bg-[#5B8021] hover:text-white font-medium"
      >
        See preview
      </Link>
    );
};

export default PreviewButton;