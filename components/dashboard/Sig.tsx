import Link from 'next/link';


export const Sig = ({name, responses}) => {

    let sig_responses = responses.filter((x) => x.sigName === name)

    return (
        <div className="border-2 p-3 rounded-lg mt-3">
            <h3 className="text-xl">{name}</h3>
            {sig_responses.length > 0 ? sig_responses.map((res, i) => <><Link key={i} href={"/response?script=" + res.script}><u>Diagnosis Page for {res.title}-{res.sigName}</u></Link><br /></>)
            : <p>No active issues</p>}
        </div>
        
    )
}