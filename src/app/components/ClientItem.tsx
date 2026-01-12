type ClientItemProps = {
    name: string;
    job: string;
    address: string;
}

export default function ClientItem({name, job, address}:ClientItemProps) {
    return (
        <li className="grid grid-cols-[1.5fr_2fr_3fr] gap-6 py-6 text-sm">
            <h2 className="font-medium">{name}</h2>
            <p className="text-gray-700">{job}</p>
            <p className="text">{address} </p>
        </li>
    );
}