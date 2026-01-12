type ClientItemProps = {
    name: string;
    job: string;
    address: string;
}

export default function ClientItem({name, job, address}:ClientItemProps) {
    return (
        <div className="grid grid-cols-[1.5fr_2fr_3fr] gap-6 py-6 text-sm">
            <div className="font-medium">{name}</div>
            <div className="text-gray-700">{job}</div>
            <div className="text">{address} </div>
        </div>
    );
}