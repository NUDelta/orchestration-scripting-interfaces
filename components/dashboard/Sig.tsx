import Link from 'next/link';
import React from 'react';

export const Sig = ({name, responses}) => {

    let sig_responses = responses.filter((x) => x.sigName === name)

    const getAbbreviation = (inputString: string): string => {
        const words = inputString.split(/[\s-]+/);
        let abbreviation = '';
        for (const word of words) {
          if (word.length > 0) {
            abbreviation += word[0].toUpperCase();
          }
        }
        return abbreviation;
      };

    return (
        <div className="border-2 p-3 rounded-lg mt-3">
            <h3 className="text-xl">{name}</h3>
            {sig_responses.length > 0 ? sig_responses.map((res, i) => <><Link key={i} href={"/response?response=" + res._id}><u>{res.title}-Accounting for Difference-{getAbbreviation(res.sigName)}</u></Link><br /></>)
            : <p>No active issues</p>}
        </div>
    )
}