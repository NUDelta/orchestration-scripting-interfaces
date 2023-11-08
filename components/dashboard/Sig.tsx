import Link from 'next/link';

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
            {sig_responses.length > 0 ? sig_responses.map((res, i) => <><Link key={i} href={"/response?response=" + res._id}><u>Diagnosis Page for {res.title}-{getAbbreviation(res.sigName)}</u></Link><br /></>)
            : <p>No active issues</p>}
        </div>
    )
}